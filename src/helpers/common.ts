export enum PayType {
    PAY_MONTHLY = 'Оклад за месяц',
    MROT = 'МРОТ',
    PAY_DAILY = 'Оплата за день',
    PAY_HOUR = 'Оплата за час'
};

export const MoneyInputLabel: { [key in PayType]: string } = {
    [PayType.PAY_MONTHLY]: '₽',
    [PayType.MROT]: '',
    [PayType.PAY_DAILY]: '₽ в день',
    [PayType.PAY_HOUR]: '₽ в час',
};

export const ndfl = 13;
