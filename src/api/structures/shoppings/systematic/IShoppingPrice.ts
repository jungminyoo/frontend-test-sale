/**
 * 가격 정보.
 * 
 * @author Samchon
 */
export interface IShoppingPrice
{
    /**
     * 명목 가격, 할인 전 가격.
     */
    nominal: number;

    /**
     * 실질 가격, 할인 후 가격.
     */
    real: number;

    /**
     * 부가세 비율.
     * 
     * 단, {@link nominal} 및 {@link real} 은 세후 가격으로 설정할 것.
     */
    tax_ratio: number;
}