import * as moment from 'moment/moment';
export class Utils {
    public static USERNAME = "username";
    public static UID = "uid";
    public static USER_ROLE = "role";  

    static formatDate(date: Date){
        return moment(date).format('DD-MM-YYYY H:mm');
    }
}