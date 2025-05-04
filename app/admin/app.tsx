"use client"

import {Admin ,Resource} from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import { CourseList } from "./course/list";
import { CourseCreate } from "./course/create";
import { CourseEdit } from "./course/edit";
import { UnitList } from "./unit/list";
import { UnitCreate } from "./unit/create";
import { UnitEdit } from "./unit/edit";
import { LessonList } from "./lesson/list";
import { LessonCreate } from "./lesson/create";
import { LessonEdit } from "./lesson/edit";
import { ChallengeCreate } from "./challenge/create";
import { ChallengeEdit } from "./challenge/edit";
import { ChallengeList } from "./challenge/list";
import { ChallengeOptionCreate } from "./challengeOption/create";
import { ChallengeOptionEdit } from "./challengeOption/edit";
import { ChallengeOptionList } from "./challengeOption/list";
const dataProvider = simpleRestProvider("/api");

const App = () => {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="courses"
            recordRepresentation="title"
            create={CourseCreate}
            edit={CourseEdit}
            list={CourseList}
            />
            <Resource name="units"
            recordRepresentation="title"
            create={UnitCreate}
            edit={UnitEdit}
            list={UnitList}
            />
            <Resource name="lessons"
            recordRepresentation="title"
            create={LessonCreate}
            edit={LessonEdit}
            list={LessonList}
            />
            <Resource name="challenges"
            recordRepresentation="question"
            create={ChallengeCreate}
            edit={ChallengeEdit}
            list={ChallengeList}
            />
            <Resource name="challengeOptions"
            recordRepresentation="text"
            create={ChallengeOptionCreate}
            edit={ChallengeOptionEdit}
            list={ChallengeOptionList}
            options={{label:"Challenge Options"}}
            />
        </Admin>
    )
    
}

export default App