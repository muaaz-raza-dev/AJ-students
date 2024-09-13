import Axios from '../Axios';
import Cookies from "js-cookie"
interface Payload {
    class_name: string;
    section_name: string;
    start_date: Date;
    ClassTeacher: {
        firstName: string;
        lastName: string;
    };
    Students: number;
    RollNo:number,
    GRNO:string,
}
export default async function FetchClassShallowDetails() {
    let Secretkey = process.env.NEXT_PUBLIC_COOKIE_KEY || ""
    let response = await Axios.get <{payload:Payload}>(`/class/my`, { headers: { token: Cookies.get(Secretkey) } })
    return response.data
}
