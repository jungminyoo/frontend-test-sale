/**
 * 판매 회사 정보.
 * 
 * {@link IShoppingSeller 판매자}들이 소속된 판매 회사 정보.
 * 
 * 본 서비스에서는 회사별로 전용 페이지를 제공하니, 일종의 스토어 단위가 되기도 한다.
 * 
 * @author Samchon
 */
export interface IShoppingCompany
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 회사명.
     */
    name: string;

    /**
     * 회사 국적.
     */
    country: string;

    /**
     * 회사 공식 홈페이지.
     */
    homepage: string | null;

    /**
     * 회사 소개.
     */
    introduction: string;

    /**
     * 회사 설립일.
     */
    established_at: string;
}