// Exercise database organized by muscle groups
const exercisesByMuscle = {
    chest: [
        {
            name: "Barbell Bench Press",
            description: "The king of chest exercises. Lie on a flat bench and press the weight upward.",
            sets: 4,
            reps: 8,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        },
        {
            name: "Incline Dumbbell Press",
            description: "Targets the upper chest. Lie on an inclined bench and press dumbbells upward.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
        },
        {
            name: "Decline Push-Ups",
            description: "Put your feet on an elevated surface and perform push-ups to target lower chest.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1536090611090-72f1ca7d71d6"
        },
        {
            name: "Cable Crossover",
            description: "Stand between cable machines and bring handles together in front of your chest.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3"
        },
        {
            name: "Chest Dips",
            description: "Lower yourself between parallel bars with a slight forward lean to target chest.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1562771242-a02d9090c90c"
        },
        {
            name: "Pec Deck Fly",
            description: "Use the pec deck machine to perform a controlled fly movement.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f"
        },
        {
            name: "Push-Ups",
            description: "The classic bodyweight exercise for chest development.",
            sets: 4,
            reps: 15,
            image: "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8"
        },
        {
            name: "Dumbbell Pullover",
            description: "Lie perpendicular on a bench and pull the dumbbell in an arc over your head.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
        }
    ],
    back: [
        {
            name: "Deadlift",
            description: "The ultimate back thickness builder. Lift a barbell from the ground to hip level.",
            sets: 4,
            reps: 6,
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
        },
        {
            name: "Pull-Ups",
            description: "Grip an overhead bar and pull your body up until your chin is over the bar.",
            sets: 4,
            reps: 8,
            image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3"
        },
        {
            name: "Barbell Rows",
            description: "Bend over with a barbell and pull it towards your stomach.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8"
        },
        {
            name: "Lat Pulldowns",
            description: "Use the cable machine to pull a bar down towards your chest.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f"
        },
        {
            name: "T-Bar Rows",
            description: "Use a T-bar row machine to pull weight towards your torso.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        },
        {
            name: "Seated Cable Rows",
            description: "Sit at a cable row station and pull the handle towards your abdomen.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f"
        },
        {
            name: "Dumbbell Rows",
            description: "Place one knee and hand on a bench, row a dumbbell with the other arm.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1536090611090-72f1ca7d71d6"
        },
        {
            name: "Hyperextensions",
            description: "Use a hyperextension bench to strengthen lower back muscles.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26"
        }
    ],
    biceps: [
        {
            name: "Barbell Curls",
            description: "The classic bicep builder. Curl a barbell up with both arms simultaneously.",
            sets: 4,
            reps: 10,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        },
        {
            name: "Dumbbell Hammer Curls",
            description: "Hold dumbbells with a neutral grip and curl them up.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1532384661798-58b53a4fbe37"
        },
        {
            name: "Incline Dumbbell Curls",
            description: "Sit on an inclined bench and curl dumbbells to emphasize the long head.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
        },
        {
            name: "EZ Bar Preacher Curls",
            description: "Use a preacher bench to isolate the biceps with an EZ curl bar.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26"
        },
        {
            name: "Concentration Curls",
            description: "Sit on a bench, rest your elbow on your inner thigh, and curl a dumbbell.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8"
        },
        {
            name: "Cable Curls",
            description: "Use a cable machine with various attachments for constant tension.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2"
        },
        {
            name: "21s",
            description: "Perform 7 partial curls from bottom to middle, 7 from middle to top, and 7 full curls.",
            sets: 3,
            reps: 21,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f"
        },
        {
            name: "Reverse Curls",
            description: "Hold a barbell with an overhand grip and curl it up to target the brachialis.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        }
    ],
    triceps: [
        {
            name: "Close-Grip Bench Press",
            description: "Perform a bench press with hands shoulder-width apart to target triceps.",
            sets: 4,
            reps: 10,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        },
        {
            name: "Tricep Dips",
            description: "Lower yourself between parallel bars focusing on the triceps.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1536090611090-72f1ca7d71d6"
        },
        {
            name: "Skull Crushers",
            description: "Lie on a bench and lower a barbell or EZ bar to your forehead.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
        },
        {
            name: "Rope Pushdowns",
            description: "Use a rope attachment on a cable machine and push down.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f"
        },
        {
            name: "Overhead Dumbbell Extension",
            description: "Hold a dumbbell overhead with both hands and lower it behind your head.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1532384661798-58b53a4fbe37"
        },
        {
            name: "Diamond Push-Ups",
            description: "Perform push-ups with your hands close together forming a diamond shape.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8"
        },
        {
            name: "Bench Dips",
            description: "Place your hands on a bench behind you and dip your body.",
            sets: 4,
            reps: 15,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f"
        },
        {
            name: "Single-Arm Cable Pushdown",
            description: "Use one arm at a time for isolated tricep development.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26"
        }
    ],
    shoulders: [
        {
            name: "Military Press",
            description: "The primary shoulder builder. Press a barbell overhead from shoulder level.",
            sets: 4,
            reps: 8,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        },
        {
            name: "Lateral Raises",
            description: "Raise dumbbells to the sides to target the medial deltoids.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
        },
        {
            name: "Front Raises",
            description: "Raise dumbbells to the front to target the anterior deltoids.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1532384661798-58b53a4fbe37"
        },
        {
            name: "Rear Delt Flyes",
            description: "Bend over and raise dumbbells to the sides to target the posterior deltoids.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8"
        },
        {
            name: "Upright Rows",
            description: "Pull a barbell up along your torso to chin level.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1536090611090-72f1ca7d71d6"
        },
        {
            name: "Shrugs",
            description: "Hold dumbbells or a barbell and elevate your shoulders to target traps.",
            sets: 4,
            reps: 15,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f"
        },
        {
            name: "Arnold Press",
            description: "A dumbbell press with rotation for complete deltoid development.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26"
        },
        {
            name: "Face Pulls",
            description: "Use a rope attachment on a cable machine to pull toward your face.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f"
        }
    ],
    legs: [
        {
            name: "Barbell Squats",
            description: "The king of leg exercises. Place a barbell on your shoulders and squat down.",
            sets: 4,
            reps: 8,
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
        },
        {
            name: "Leg Press",
            description: "Push weight away using the leg press machine.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f"
        },
        {
            name: "Romanian Deadlifts",
            description: "Bend at the hips with a slight knee bend to target hamstrings.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        },
        {
            name: "Leg Extensions",
            description: "Use the leg extension machine to isolate the quadriceps.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f"
        },
        {
            name: "Leg Curls",
            description: "Use the leg curl machine to isolate the hamstrings.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1562771242-a02d9090c90c"
        },
        {
            name: "Calf Raises",
            description: "Stand on a raised platform and lift your heels up and down.",
            sets: 4,
            reps: 20,
            image: "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8"
        },
        {
            name: "Lunges",
            description: "Step forward and lower your body to work quads and glutes.",
            sets: 3,
            reps: "12 each leg",
            image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26"
        },
        {
            name: "Bulgarian Split Squats",
            description: "Place one foot on a bench behind you and lower your body.",
            sets: 3,
            reps: "10 each leg",
            image: "https://images.unsplash.com/photo-1532384661798-58b53a4fbe37"
        }
    ],
    abs: [
        {
            name: "Crunches",
            description: "The classic ab exercise. Lie on your back and curl your torso upward.",
            sets: 3,
            reps: 20,
            image: "https://images.unsplash.com/photo-1536090611090-72f1ca7d71d6"
        },
        {
            name: "Leg Raises",
            description: "Lie on your back and raise your legs to target lower abs.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8"
        },
        {
            name: "Plank",
            description: "Hold a push-up position on your forearms to build core stability.",
            sets: 3,
            reps: "30-60 seconds",
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
        },
        {
            name: "Russian Twists",
            description: "Sit in a V position and twist to each side to target obliques.",
            sets: 3,
            reps: "20 total",
            image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26"
        },
        {
            name: "Ab Wheel Rollout",
            description: "Use an ab wheel to roll forward and back.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        },
        {
            name: "Hanging Leg Raises",
            description: "Hang from a pull-up bar and raise your legs to work lower abs.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3"
        },
        {
            name: "Cable Crunches",
            description: "Kneel at a cable machine and crunch down using a rope attachment.",
            sets: 3,
            reps: 15,
            image: "https://images.unsplash.com/photo-1591311630200-ffa9120a540f"
        },
        {
            name: "Mountain Climbers",
            description: "Get in a plank position and alternate bringing knees to chest.",
            sets: 3,
            reps: "30 seconds",
            image: "https://images.unsplash.com/photo-1532384661798-58b53a4fbe37"
        }
    ],
    fullbody: [
        {
            name: "Barbell Squats",
            description: "Full-body compound movement focusing on legs and core.",
            sets: 4,
            reps: 8,
            image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f"
        },
        {
            name: "Deadlifts",
            description: "The ultimate full-body strength builder.",
            sets: 4,
            reps: 6,
            image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e"
        },
        {
            name: "Bench Press",
            description: "Primary upper body push movement.",
            sets: 4,
            reps: 8,
            image: "https://images.unsplash.com/photo-1585892478726-d26363dbf9e8"
        },
        {
            name: "Pull-Ups",
            description: "Master upper body pull exercise.",
            sets: 3,
            reps: 8,
            image: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3"
        },
        {
            name: "Push Press",
            description: "Explosive overhead press using legs and shoulders.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1536090611090-72f1ca7d71d6"
        },
        {
            name: "Barbell Rows",
            description: "Compound back exercise for thickness and strength.",
            sets: 3,
            reps: 10,
            image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26"
        },
        {
            name: "Dips",
            description: "Upper body pushing movement for chest and triceps.",
            sets: 3,
            reps: 12,
            image: "https://images.unsplash.com/photo-1562771242-a02d9090c90c"
        },
        {
            name: "Lunges",
            description: "Unilateral leg exercise for balance and strength.",
            sets: 3,
            reps: "10 each leg",
            image: "https://images.unsplash.com/photo-1532384661798-58b53a4fbe37"
        }
    ]
};
