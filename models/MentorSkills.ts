export class MentorSkills{
    public skill_id:number;
    constructor(

        public course_id:number,
        public course_nm:String,
        public status:String,
        public user_id:number,
        public user_nm:String,
        public course_desc:String,
        public is_active:String
       
    ){
        
    }
}