import { EntityRepository, Repository } from "typeorm";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepoitory extends Repository<SurveyUser> {}

export { SurveysUsersRepoitory }