import { IManufacturer } from "./IManufacturer";

/**
 * 제품 정보.
 * 
 * `IProduct` 는 {@link IShoppingSale 매물}의 각 {@link IShoppingSaleUnit 유닛}이 취급하는 
 * 제품을 형상화한 자료구조 인터페이스이다. 단, 이 제품이라는 것이 {@link IShoppingSaleUnitOption} 
 * 나 {@link IShoppingSaleUnitStock} 를 보면 알 수 있다시피, 곧바로 최종 판매물을 의미하는 것은
 * 아니다.
 * 
 * @author Samchon
 */
export interface IProduct
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 제조사 정보.
     */
    manufacturer: IManufacturer;

    /**
     * 제품명.
     */
    name: string;

    /**
     * 유형 여부.
     */
    tangible: boolean;
}