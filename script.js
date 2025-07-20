// Supabase Configuration
// Replace these with your actual Supabase credentials
const SUPABASE_URL = 'https://izewvvglgtaxgsnjxedl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZXd2dmdsZ3RheGdzbmp4ZWRsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5ODM1NjksImV4cCI6MjA2ODU1OTU2OX0.IrWoFXv0q909pXaNEJh7bNhz-ir5_Q039m7kTp7-XB4';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// DOM Elements
const form = document.getElementById('interestForm');
const formMessage = document.getElementById('formMessage');
const heroForm = document.getElementById('heroForm');
const heroFormMessage = document.getElementById('heroFormMessage');
const totalSignupsElement = document.getElementById('totalSignups');
const submitButton = document.querySelector('.submit-button');
const heroSubmitButton = document.querySelector('.hero-submit-button');
const buttonText = document.querySelector('.button-text');
const heroButtonText = document.querySelector('.hero-submit-button .button-text');
const loadingSpinner = document.querySelector('.loading-spinner');
const heroLoadingSpinner = document.querySelector('.hero-submit-button .loading-spinner');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadTotalSignups();
    setupFormHandling();
    setupAnimations();
});

// Load total signups count
async function loadTotalSignups() {
    try {
        const { count, error } = await supabase
            .from('interests')
            .select('*', { count: 'exact', head: true });

        if (error) {
            console.error('Error loading interests count:', error);
            return;
        }

        // Animate the count
        animateCount(totalSignupsElement, count || 0);
    } catch (error) {
        console.error('Error loading interests count:', error);
    }
}

// Animate count display
function animateCount(element, targetCount) {
    const startCount = 0;
    const duration = 1000; // 1 second
    const startTime = performance.now();

    function updateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(startCount + (targetCount - startCount) * easeOutQuart);
        
        element.textContent = currentCount;
        
        if (progress < 1) {
            requestAnimationFrame(updateCount);
        }
    }
    
    requestAnimationFrame(updateCount);
}

// Setup form handling
function setupFormHandling() {
    form.addEventListener('submit', handleFormSubmit);
    heroForm.addEventListener('submit', handleHeroFormSubmit);
}

// Handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    
    // Basic validation
    if (!name || !email) {
        showMessage('请填写所有必填字段', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showMessage('请输入有效的邮箱地址', 'error');
        return;
    }
    
    // Show loading state
    setLoadingState(true);
    
    try {
        // Check if email already exists
        const { data: existingUser, error: checkError } = await supabase
            .from('interests')
            .select('id')
            .eq('email', email)
            .single();
        
        if (checkError && checkError.code !== 'PGRST116') {
            throw checkError;
        }
        
        if (existingUser) {
            showMessage('该邮箱地址已经报名过了', 'error');
            setLoadingState(false);
            return;
        }
        
        // Insert new signup
        const { data, error } = await supabase
            .from('interests')
            .insert([
                {
                    name: name,
                    email: email,
                    subscribed: false,
                    created_at: new Date().toISOString()
                }
            ])
            .select();
        
        if (error) {
            throw error;
        }
        
        // Success
        showMessage('报名成功！我们会在课程开始前通知你。', 'success');
        form.reset();
        
        // Update the count
        await loadTotalSignups();
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showMessage('提交失败，请稍后重试', 'error');
    } finally {
        setLoadingState(false);
    }
}

// Handle hero form submission
async function handleHeroFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(heroForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subscribe = formData.get('subscribe') === 'on';
    
    // Basic validation
    if (!name || !email) {
        showHeroMessage('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showHeroMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Show loading state
    setHeroLoadingState(true);
    
    try {
        // Check if email already exists
        const { data: existingUser, error: checkError } = await supabase
            .from('interests')
            .select('id')
            .eq('email', email)
            .single();
        
        if (checkError && checkError.code !== 'PGRST116') {
            throw checkError;
        }
        
        if (existingUser) {
            showHeroMessage('This email is already registered', 'error');
            setHeroLoadingState(false);
            return;
        }
        
        // Insert new signup
        const { data, error } = await supabase
            .from('interests')
            .insert([
                {
                    name: name,
                    email: email,
                    subscribed: subscribe,
                    created_at: new Date().toISOString()
                }
            ])
            .select();
        
        if (error) {
            throw error;
        }
        
        // Success
        showHeroMessage('Success! We\'ll notify you when we launch.', 'success');
        heroForm.reset();
        
        // Update the count
        await loadTotalSignups();
        
    } catch (error) {
        console.error('Error submitting hero form:', error);
        showHeroMessage('Submission failed, please try again', 'error');
    } finally {
        setHeroLoadingState(false);
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Show hero message
function showHeroMessage(message, type) {
    heroFormMessage.textContent = message;
    heroFormMessage.className = `form-message ${type}`;
    heroFormMessage.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        heroFormMessage.style.display = 'none';
    }, 5000);
}

// Set loading state
function setLoadingState(isLoading) {
    submitButton.disabled = isLoading;
    buttonText.style.display = isLoading ? 'none' : 'inline';
    loadingSpinner.style.display = isLoading ? 'inline' : 'none';
}

// Set hero loading state
function setHeroLoadingState(isLoading) {
    heroSubmitButton.disabled = isLoading;
    heroButtonText.style.display = isLoading ? 'none' : 'inline';
    heroLoadingSpinner.style.display = isLoading ? 'inline' : 'none';
}

// Scroll to form function
function scrollToForm() {
    const formSection = document.getElementById('signupForm');
    formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

// Setup animations
function setupAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .form-container');
    animateElements.forEach(el => observer.observe(el));
}

// Real-time updates (optional - for demonstration)
// This would require Supabase real-time subscriptions
// Uncomment if you want real-time updates
/*
function setupRealtimeUpdates() {
    const subscription = supabase
        .channel('interests_changes')
        .on('postgres_changes', 
            { 
                event: '*', 
                schema: 'public', 
                table: 'interests' 
            }, 
            (payload) => {
                console.log('Change received!', payload);
                loadTotalSignups();
            }
        )
        .subscribe();
}
*/

// Error handling for missing Supabase credentials
if (!SUPABASE_URL || SUPABASE_URL === 'YOUR_SUPABASE_URL' || 
    !SUPABASE_ANON_KEY || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
    console.warn('⚠️ 请配置 Supabase 凭据以启用完整功能');
    
    // Fallback for demo purposes
    document.addEventListener('DOMContentLoaded', function() {
        // Simulate form submission for demo
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            showMessage('演示模式：表单提交功能需要配置 Supabase 凭据', 'success');
            form.reset();
            
            // Simulate count update
            const currentCount = parseInt(totalSignupsElement.textContent) || 0;
            animateCount(totalSignupsElement, currentCount + 1);
        });
        
        // Simulate hero form submission for demo
        heroForm.addEventListener('submit', function(event) {
            event.preventDefault();
            showHeroMessage('Demo mode: Form submission requires Supabase credentials', 'success');
            heroForm.reset();
            
            // Simulate count update
            const currentCount = parseInt(totalSignupsElement.textContent) || 0;
            animateCount(totalSignupsElement, currentCount + 1);
        });
        
        // Set initial count for demo
        animateCount(totalSignupsElement, 126);
    });
} 