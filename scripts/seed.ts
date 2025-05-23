import "dotenv/config";

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try{
        console.log("Seeding database...");
        await db.delete(schema.courses);
        await db.delete(schema.userProgress);
        await db.delete(schema.units);
        await db.delete(schema.lessons);
        await db.delete(schema.challenges);
        await db.delete(schema.challengeOptions);
        await db.delete(schema.challengeProgress);
        await db.delete(schema.userSubscription);
        
        await db.insert(schema.courses).values([
            {
                id:1,
                title:"Spanish",
                imageSrc:"/es.svg"
            },{
                id:2,
                title:"Italian",
                imageSrc:"/it.svg"
            },{
                id:3,
                title:"French",
                imageSrc:"/fr.svg"
            },{
                id:4,
                title:"Croation",
                imageSrc:"/hr.svg"
            },{
                id:5,
                title:"Hindi",
                imageSrc:"/in.jpg"
            },{
                id: 6,
                title: "Japanese",
                imageSrc: "/jp.png"
            }
        ]);

        await db.insert(schema.units).values([
            {
                id:1,
                courseId:1,
                title:"Unit 1",
                description:"Learn the basics of Spanish",
                order:1
            },{
                id: 2,
                courseId: 5,
                title: "Unit 1",
                description: "Learn the basics of Hindi",
                order: 2
            },{
                id: 3,
                courseId: 6,
                title: "Unit 1",
                description: "Learn the basics of Japanese",
                order: 1
            }
        ]);

        await db.insert(schema.lessons).values([
            {
                id:1,
                unitId:1,
                title:"Nouns",
                order:1,
            },
            {
                id:2,
                unitId:1,
                title:"Verbs",
                order:2,
            },{
                id:3,
                unitId:1,
                title:"Verbs",
                order:3,
            },{
                id:4,
                unitId:1,
                title:"Verbs",
                order:4,
            },{
                id:5,
                unitId:1,
                title:"Verbs",
                order:5,
            },{
                id: 6,
                unitId: 2,
                title: "Nouns",
                order: 6
            },{
                id: 7,
                unitId: 3,
                title: "Nouns",
                order: 1
            }
        ])

        await db.insert(schema.challenges).values([
            {
                id:1,
                lessonId:1,
                type:"SELECT",
                order:1,
                question:'Which of these is the "the man"?',
            },{
                id:2,
                lessonId:1,
                type:"ASSIST",
                order:2,
                question:'"the man"',
            },{
                id:3,
                lessonId:1,
                type:"SELECT",
                order:3,
                question:'Which one of these is "the robot"?',
            },{
                id:7,
                lessonId: 6,
                type: "SELECT",
                order: 1,
                question: 'Which of these means "the man"?',
            },
            {
                id: 8,
                lessonId: 6,
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            },{
                id: 9,
                lessonId: 7,
                type: "SELECT",
                order: 1,
                question: 'Which of these means "the man"?',
            },
            {
                id: 10,
                lessonId: 7,
                type: "ASSIST",
                order: 2,
                question: '"the man"',
            }
        ])
        await db.insert(schema.challengeOptions).values([
            {
                challengeId:1,
                imageSrc:"/man.svg",
                correct:true,
                text:"el hombre",
                audioSrc:"/es_man.mp3", 
            },{
                challengeId:1,
                imageSrc:"/woman.svg",
                correct:false,
                text:"la mujer",
                audioSrc:"/es_woman.mp3", 
            },{
                challengeId:1,
                imageSrc:"/robot.svg",
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3", 
            },
        ])
        
        await db.insert(schema.challengeOptions).values([
            {
                challengeId:2,
                correct:true,
                text:"el hombre",
                audioSrc:"/es_man.mp3", 
            },{
                challengeId:2,
                correct:false,
                text:"la mujer",
                audioSrc:"/es_woman.mp3", 
            },{
                challengeId:2,
                correct:false,
                text:"el robot",
                audioSrc:"/es_robot.mp3", 
            },
        ])
        await db.insert(schema.challengeOptions).values([
            {
                challengeId:3,
                imageSrc:"/man.svg",
                correct:false,
                text:"el hombre",
                audioSrc:"/es_man.mp3", 
            },{
                challengeId:3,
                imageSrc:"/woman.svg",
                correct:false,
                text:"la mujer",
                audioSrc:"/es_woman.mp3", 
            },{
                challengeId:3,
                imageSrc:"/robot.svg",
                correct:true,
                text:"el robot",
                audioSrc:"/es_robot.mp3", 
            },
        ])

        await db.insert(schema.challenges).values([
            {
                id:4,
                lessonId:2,
                type:"SELECT",
                order:1,
                question:'Which of these is the "the man"?',
            },{
                id:5,
                lessonId:2,
                type:"ASSIST",
                order:2,
                question:'"the man"',
            },{
                id:6,
                lessonId:2,
                type:"SELECT",
                order:3,
                question:'Which one of these is "the robot"?',
            }
        ])
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 7,
                imageSrc: "/man.svg",
                correct: true,
                text: "Aadmi / आदमी",
                audioSrc: "/hi_man.mp3"
            },
            {
                challengeId: 7,
                imageSrc: "/woman.svg",
                correct: false,
                text: "Aurat / औरत",
                audioSrc: "/hi_woman.mp3"
            },
            {
                challengeId: 7,
                imageSrc: "/robot.svg",
                correct: false,
                text: "Robot / रोबोट",
                audioSrc: "/hi_robot.mp3"
            }
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 8,
                correct: true,
                text: "Aadmi / आदमी",
                audioSrc: "/hi_man.mp3"
            },
            {
                challengeId: 8,
                correct: false,
                text: "Aurat / औरत",
                audioSrc: "/hi_woman.mp3"
            },
            {
                challengeId: 8,
                correct: false,
                text: "Robot / रोबोट",
                audioSrc: "/hi_robot.mp3"
            }
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 9,
                imageSrc: "/man.svg",
                correct: true,
                text: "Otoko no hito / 男の人", // Otoko no hito
                audioSrc: "/jp_man.mp3"
            },
            {
                challengeId: 9,
                imageSrc: "/woman.svg",
                correct: false,
                text: "Onna no hito / 女の人", // Onna no hito
                audioSrc: "/jp_woman.mp3"
            },
            {
                challengeId: 9,
                imageSrc: "/robot.svg",
                correct: false,
                text: "Robotto / ロボット", // Robotto
                audioSrc: "/jp_robot.mp3"
            }
        ]);
        await db.insert(schema.challengeOptions).values([
            {
                challengeId: 10,
                correct: true,
                text: "Otoko no hito / 男の人", // Otoko no hito
                audioSrc: "/jp_man.mp3"
            },
            {
                challengeId: 10,
                correct: false,
                text: "Onna no hito / 女の人", // Onna no hito
                audioSrc: "/jp_woman.mp3"
            },
            {
                challengeId: 10,
                correct: false,
                text: "Robotto / ロボット", // Robotto
                audioSrc: "/jp_robot.mp3"
            }
        ]);
        console.log("Seeding finished")
    }catch(error){
        console.error(error);
        throw new Error("Failed to seed database");
    }
}
main();