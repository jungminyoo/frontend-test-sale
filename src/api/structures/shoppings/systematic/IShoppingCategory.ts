/**
 * 시장 내 카테고리 정보.
 * 
 * `IShoppingCategory` 는 쇼핑몰에서의 분류 카테고리에 해당하는 개념이다. 따라서 오프라인 시장에서의 
 * 독립적인 공간 정보 격인 "코너" 를 뜻하는 {@link IShoppingSection} 과는 달리, 
 * {@link IShoppingSale} 이 특정 `IShoppingCategory` 에 귀속되는 개념이 아니며, M: N 의 관계를 
 * 지니고 있다.
 * 
 * 예를 들어, 돼지고기는 정육코너에 귀속되고 사과는 과일코너에 귀속되지만, 카테고리에 대하여는 어딘가에 귀속되는 
 * 일 없이, 각 상품이 고유하게 카테고리들과의 독자적인 M: N 의 관계를 맺을 수 있다.
 * 
 * 제품    | 코너    | 분류
 * -------|--------|---------------
 * 돼지고기 | 정육코너 | 냉동식품, 기호식품
 * 사과    | 과일코너 | 신선식품, 기호식품
 * 
 * @author Samchon
 */
export interface IShoppingCategory
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 식별자 코드.
     */
    code: string;

    /**
     * 카테고리 이름.
     */
    name: string;

    /**
     * 상품 공시정보 타입 코드 리스트.
     */
    merchandise_disclosure_type_codes: string[];

    /**
     * 자식 카테고리 리스트.
     */
    children: IShoppingCategory[];

    /**
     * 레코드 생성 일시.
     */
    created_at: string;
}

export namespace IShoppingCategory
{
    /**
     * 참조 정보로써의 카테고리
     */
    export interface IReference
    {
        /**
         * Primary Key.
         */
        id: string;

        /**
         * 부모 카테고리 정보.
         */
        parent: IReference | null;

        /**
         * 식별자 코드.
         */
        code: string;

        /**
         * 카테고리 이름.
         */
        name: string;

        /**
         * 레코드 생성 일시.
         */
        created_at: string;
    }
}