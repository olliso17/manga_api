import { Injectable } from "@nestjs/common";
import { Post } from "src/post/entities/post.entity";
import { User } from "src/user/entities/user.entity";
import { Action } from "./enums/action.enum";
import {Ability, AbilityClass, AbilityBuilder, InferSubjects, ExtractSubjectType}   from "@casl/ability";

type Subjects = InferSubjects<typeof Post | typeof User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
    createForUser(user: User) {
        const { can, cannot, build } = new AbilityBuilder<
          Ability<[Action, Subjects]>
        >(Ability as AbilityClass<AppAbility>);
    
        if (user.isAdmin) {
          can(Action.Manage, 'all'); // read-write access to everything
        } else {
          can(Action.Read, 'all'); // read-only access to everything
        }
    
        can(Action.Update, Post, { userId: user.id });
        cannot(Action.Delete, Post, { isPublished: true });
    
        return build({
          // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
          detectSubjectType: (item) =>
            item.constructor as ExtractSubjectType<Subjects>,
        });
      }
}
