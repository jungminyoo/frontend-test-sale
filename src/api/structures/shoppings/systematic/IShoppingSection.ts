/**
 * 시장의 섹션 정보.
 * 
 * `IShoppingSection` 은 시장에서의 섹션 정보를 표현하기 위하여 설계된 자료구조 인터페이스이다. 여기서
 * 섹션이란 오프라인 시장으로 치면 XX 코너 같은 의미이다. "문구코너" 나 "과일코너" 및 "정육코너" 등, 매장
 * 내에서 공간적으로 분리된 영역을 뜻한다.
 * 
 * 따라서 {@link IShoppingSeller 판매자가} 등록한 {@link IShoppingSale 매물}은 반드시, 그것이 
 * 속하는 코너 격인 {@link IShoppingSale.section} 에 귀속하도록 하고 있다. 
 * 
 * @author Samchon
 */
export interface IShoppingSection
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
     * 섹션 이름.
     */
    name: string;
}