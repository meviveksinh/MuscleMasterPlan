// Main JavaScript for Muscle Master website

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // DOM Elements
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const muscleButtons = document.querySelectorAll('.muscle-btn');
    const exerciseContainer = document.getElementById('exercise-container');
    const selectedMuscleTitle = document.getElementById('selected-muscle');
    const startWorkoutBtn = document.getElementById('start-workout');
    
    // Toggle mobile menu
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Function to display exercises for the selected muscle group
    function displayExercises(muscleGroup) {
        // Clear previous exercises
        exerciseContainer.innerHTML = '';
        
        // Get exercises for the selected muscle group
        const exercises = exercisesByMuscle[muscleGroup];
        
        if (!exercises || exercises.length === 0) {
            exerciseContainer.innerHTML = '<p>No exercises found for this muscle group.</p>';
            return;
        }
        
        // Create exercise cards
        exercises.forEach(exercise => {
            const exerciseCard = document.createElement('div');
            exerciseCard.classList.add('exercise-card');
            
            exerciseCard.innerHTML = `
                <div class="exercise-image" style="background-image: url('${exercise.image}')"></div>
                <div class="exercise-details">
                    <h4>${exercise.name}</h4>
                    <p>${exercise.description}</p>
                    <p class="sets-reps">${exercise.sets} sets x ${exercise.reps} reps</p>
                </div>
            `;
            
            exerciseContainer.appendChild(exerciseCard);
        });
    }
    
    // Handle muscle group selection
    if (muscleButtons.length > 0) {
        console.log('Adding click events to muscle buttons');
        muscleButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('Button clicked:', this.dataset.muscle);
                
                // Remove active class from all buttons
                muscleButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get the selected muscle group
                const selectedMuscle = this.dataset.muscle;
                
                // Update title
                selectedMuscleTitle.textContent = `${selectedMuscle.charAt(0).toUpperCase() + selectedMuscle.slice(1)} Exercises`;
                
                // Display exercises for the selected muscle group
                displayExercises(selectedMuscle);
                
                // Show the start workout button
                if (startWorkoutBtn) {
                    startWorkoutBtn.style.display = 'inline-block';
                }
            });
        });
    } else {
        console.error('No muscle buttons found!');
    }
    
    // Start Workout Button Animation
    if (startWorkoutBtn) {
        startWorkoutBtn.addEventListener('click', function() {
            this.innerHTML = '<i class="fas fa-stopwatch"></i> Workout Started!';
            this.style.backgroundColor = '#28a745';
            
            // Highlight exercise cards one by one
            const exerciseCards = document.querySelectorAll('.exercise-card');
            
            exerciseCards.forEach((card, index) => {
                setTimeout(() => {
                    // Reset all cards
                    exerciseCards.forEach(c => c.style.transform = '');
                    exerciseCards.forEach(c => c.style.boxShadow = '');
                    
                    // Highlight current card
                    card.style.transform = 'scale(1.05) translateY(-15px)';
                    card.style.boxShadow = '0 20px 30px rgba(255, 77, 0, 0.4)';
                    
                    // If last card, reset button after delay
                    if (index === exerciseCards.length - 1) {
                        setTimeout(() => {
                            card.style.transform = '';
                            card.style.boxShadow = '';
                            startWorkoutBtn.innerHTML = 'Start Workout';
                            startWorkoutBtn.style.backgroundColor = '';
                        }, 2000);
                    }
                }, index * 3000); // 3 seconds per exercise
            });
        });
    }
    
    // Add scroll event listener to change header background when scrolling
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
            } else {
                header.style.backgroundColor = 'rgba(18, 18, 18, 0.9)';
            }
        }
    });
    
    // Select chest button by default after a short delay
    setTimeout(() => {
        const defaultMuscleBtn = document.querySelector('[data-muscle="chest"]');
        if (defaultMuscleBtn) {
            defaultMuscleBtn.click();
            console.log('Default muscle button clicked');
        } else {
            console.error('Default muscle button not found!');
        }
    }, 500);
});
