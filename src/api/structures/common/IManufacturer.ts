/**
 * 제조사 정보.
 * 
 * `IShoppingManufacturer` 는 {@link IProduct} 의 제조사를 형상화한 자료구조 인터페이스이다.
 * 
 * @author Samchon
 */
export interface IManufacturer
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 제조사 이름.
     */
    name: string;
}