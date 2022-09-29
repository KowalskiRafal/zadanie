export interface DebtsType {
    Id: number;
    Name: string;
    NIP: string;
    Value: number;
    debts: string;
    Date: string;
    Number: string;
    Price: number;
}

export interface DebtsListProps {
 debts: DebtsType[];
 error: string | null;
}
