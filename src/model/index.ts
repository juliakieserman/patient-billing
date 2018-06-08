export interface IPerson {
    uid: string;
    name: string;
    address: string;
    phone: string;
    email: string;
}

export type ContactMethod = "email" | "phone";
export const ContactMethod = {
    email: "email" as ContactMethod,
    phone: "phone" as ContactMethod,
}

export type Month = "January | February | March | April | May | June | July | August | September | October | November | December";
export const Month = {
    january: "January" as Month,
    // tslint:disable-next-line:object-literal-sort-keys
    february: "February" as Month,
    march: "March" as Month,
    april: "April" as Month,
    may: "May" as Month,
    june: "June" as Month,
    july: "July" as Month,
    august: "August" as Month,
    september: "September" as Month,
    november: "November" as Month,
    december: "December" as Month,
}

export interface IPatient {
    primaryContact: IPerson;
    sponsor: IPerson | null;
    contactMethod: string;
    sessions: ISession[];
}

export interface IPayment {
    patient: IPatient;
    checkNum: number;
    date: Date;
}

export interface ISession {
    // necessary?
    uid: string;
    date: Date;
    rate: number;
    code: number;
}

export interface IMonthlyBill {
    patient: IPatient;
    month: Month;
}
