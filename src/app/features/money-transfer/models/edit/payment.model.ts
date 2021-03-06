import { PaymentReason } from './payment-reason.enum';

export interface Payer {
    payerIban: string;
}

export interface Beneficiary {
    beneficiaryIban: string;
    amount: number;
    paymentReason: PaymentReason;
}

export interface Transaction {
    id: number;
    payer: Payer;
    beneficiary: Beneficiary;
}

export class TransactionUtil {

    static clone(t: Transaction): Transaction {
        return JSON.parse(JSON.stringify(t));
    }

    static updatePayer(t: Transaction, p: Payer) {
        if (t) {
            t.payer = p;
        }
    }

    static updateBeneficiary(t: Transaction, b: Beneficiary) {
        if (t) {
            t.beneficiary = b;
        }
    }
}
