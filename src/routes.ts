import { AudiencesController } from "./controller/AudiencesController";
import { ClassesController } from "./controller/ClassesController";
import { DepartmentsController } from "./controller/DepartmentsController";
import { EventCoordinatorsController } from "./controller/EventCoordinatorsController";
import { EventRegistrationListController } from "./controller/EventRegistrationListController";
import { EventsController } from "./controller/EventsController";
import { LeadersController } from "./controller/LeadersController";
import { MajorsController } from "./controller/MajorsController";
import { MembersController } from "./controller/MembersController";
import { SkillsController } from "./controller/SkillsController";
import { SkillsetController } from "./controller/SkillsetController";

export const Routes = [
    {
        method: "get",
        route: "/audiences",
        controller: AudiencesController,
        action: "all"
    },
    {
        method: "get",
        route: "/audiences/:id",
        controller: AudiencesController,
        action: "one"
    },
    {
        method: "post",
        route: "/audiences",
        controller: AudiencesController,
        action: "save"
    },
    {
        method: "delete",
        route: "/audiences/:id",
        controller: AudiencesController,
        action: "remove"
    },
    {
        method: "get",
        route: "/classes",
        controller: ClassesController,
        action: "all"
    },
    {
        method: "get",
        route: "/classes/:id",
        controller: ClassesController,
        action: "one"
    },
    {
        method: "post",
        route: "/classes",
        controller: ClassesController,
        action: "save"
    },
    {
        method: "delete",
        route: "/classes/:id",
        controller: ClassesController,
        action: "remove"
    },
    {
        method: "get",
        route: "/departments",
        controller: DepartmentsController,
        action: "all"
    },
    {
        method: "get",
        route: "/departments/:id",
        controller: DepartmentsController,
        action: "one"
    },
    {
        method: "post",
        route: "/departments",
        controller: DepartmentsController,
        action: "save"
    },
    {
        method: "delete",
        route: "/departments/:id",
        controller: DepartmentsController,
        action: "remove"
    },
    {
        method: "get",
        route: "/eventcordinators",
        controller: EventCoordinatorsController,
        action: "all"
    },
    {
        method: "get",
        route: "/eventcordinators/:id",
        controller: EventCoordinatorsController,
        action: "one"
    },
    {
        method: "post",
        route: "/eventcordinators",
        controller: EventCoordinatorsController,
        action: "save"
    },
    {
        method: "delete",
        route: "/eventcordinators/:id",
        controller: EventCoordinatorsController,
        action: "remove"
    },
    {
        method: "get",
        route: "/eventregistrationlist",
        controller: EventRegistrationListController,
        action: "all"
    },
    {
        method: "get",
        route: "/eventregistrationlist/:id",
        controller: EventRegistrationListController,
        action: "one"
    },
    {
        method: "post",
        route: "/eventregistrationlist",
        controller: EventRegistrationListController,
        action: "save"
    },
    {
        method: "delete",
        route: "/eventregistrationlist/:id",
        controller: EventRegistrationListController,
        action: "remove"
    },
    {
        method: "get",
        route: "/event",
        controller: EventsController,
        action: "all"
    },
    {
        method: "get",
        route: "/event/:id",
        controller: EventsController,
        action: "one"
    },
    {
        method: "post",
        route: "/event",
        controller: EventsController,
        action: "save"
    },
    {
        method: "delete",
        route: "/event/:id",
        controller: EventsController,
        action: "remove"
    },
    {
        method: "get",
        route: "/leaders",
        controller: LeadersController,
        action: "all"
    },
    {
        method: "get",
        route: "/leaders/:id",
        controller: LeadersController,
        action: "one"
    },
    {
        method: "post",
        route: "/leaders",
        controller: LeadersController,
        action: "save"
    },
    {
        method: "delete",
        route: "/leaders/:id",
        controller: LeadersController,
        action: "remove"
    },
    {
        method: "get",
        route: "/majors",
        controller: MajorsController,
        action: "all"
    },
    {
        method: "get",
        route: "/majors/:id",
        controller: MajorsController,
        action: "one"
    },
    {
        method: "post",
        route: "/majors",
        controller: MajorsController,
        action: "save"
    },
    {
        method: "delete",
        route: "/majors/:id",
        controller: MajorsController,
        action: "remove"
    },
    {
        method: "get",
        route: "/members",
        controller: MembersController,
        action: "all"
    },
    {
        method: "get",
        route: "/members/:id",
        controller: MembersController,
        action: "one"
    },
    {
        method: "post",
        route: "/members",
        controller: MembersController,
        action: "save"
    },
    {
        method: "delete",
        route: "/members/:id",
        controller: MembersController,
        action: "remove"
    },
    {
        method: "get",
        route: "/skills",
        controller: SkillsController,
        action: "all"
    },
    {
        method: "get",
        route: "/skills/:id",
        controller: SkillsController,
        action: "one"
    },
    {
        method: "post",
        route: "/skills",
        controller: SkillsController,
        action: "save"
    },
    {
        method: "delete",
        route: "/skills/:id",
        controller: SkillsController,
        action: "remove"
    },
    {
        method: "get",
        route: "/skillset",
        controller: SkillsetController,
        action: "all"
    },
    {
        method: "get",
        route: "/skillset/:id",
        controller: SkillsetController,
        action: "one"
    },
    {
        method: "post",
        route: "/skillset",
        controller: SkillsetController,
        action: "save"
    },
    {
        method: "delete",
        route: "/skillset/:id",
        controller: SkillsetController,
        action: "remove"
    },
];