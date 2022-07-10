import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EventCoordinators } from "./EventCoordinators";
import { Leaders } from "./Leaders";
import { Classes } from "./Classes";
import { Departments } from "./Departments";
import { Skillset } from "./Skillset";

@Index("student_id", ["studentId"], { unique: true })
@Index("members_account_uindex", ["account"], { unique: true })
@Index("members_departments__fk", ["departmentCode"], {})
@Index("members_classes__fk", ["class"], {})
@Entity("members", { schema: "istech_management" })
export class Members {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", {
    name: "account",
    nullable: true,
    unique: true,
    length: 64,
  })
  account: string | null;

  @Column("varchar", { name: "first_name", length: 255 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 255 })
  lastName: string;

  @Column("date", { name: "dob", nullable: true })
  dob: string | null;

  @Column("varchar", { name: "class", nullable: true, length: 64 })
  class: string | null;

  @Column("int", { name: "student_id", unique: true })
  studentId: number;

  @Column("varchar", { name: "ms_teams_email", nullable: true, length: 64 })
  msTeamsEmail: string | null;

  @Column("varchar", { name: "facebook_account", nullable: true, length: 64 })
  facebookAccount: string | null;

  @Column("varchar", { name: "email", length: 255 })
  email: string;

  @Column("varchar", { name: "trello_account", nullable: true, length: 64 })
  trelloAccount: string | null;

  @Column("varchar", { name: "city_code", nullable: true, length: 64 })
  cityCode: string | null;

  @Column("varchar", { name: "department_code", length: 5 })
  departmentCode: string;

  @Column("int", { name: "generation" })
  generation: number;

  @Column("datetime", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("varchar", { name: "created_by", nullable: true, length: 64 })
  createdBy: string | null;

  @Column("date", { name: "joined_since", nullable: true })
  joinedSince: string | null;

  @OneToMany(
    () => EventCoordinators,
    (eventCoordinators) => eventCoordinators.memberAccount2
  )
  eventCoordinators: EventCoordinators[];

  @OneToMany(() => Leaders, (leaders) => leaders.leadAccount2)
  leaders: Leaders[];

  @ManyToOne(() => Classes, (classes) => classes.members, {
    onDelete: "NO ACTION",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "class", referencedColumnName: "classCode" }])
  class2: Classes;

  @ManyToOne(() => Departments, (departments) => departments.members, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([
    { name: "department_code", referencedColumnName: "departmentCode" },
  ])
  departmentCode2: Departments;

  @OneToMany(() => Skillset, (skillset) => skillset.account2)
  skillsets: Skillset[];
}
