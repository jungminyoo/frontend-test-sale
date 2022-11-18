/**
 * 매물 유닛에서 최종 구성품의 개별 구성요소.
 * 
 * `IShoppingSaleUnitStockElement` 는 귀속 {@link IShoppingSaleUnitStock 스톡}이 어떤 
 * {@link IShoppingSaleUnitOption 옵션} 내지 선택 가능한 {@link IShoppingSaleUnitOptionCandidate 
 * 후보 아이템}을 골라 구성된 것인지를 표현하기 위하여 설계된 자료구조 인터페이스이다.
 * 
 * @author Samchon
 */
export interface IShoppingSaleUnitStockElement
{
    /**
     * 대상 옵션의 {@link IShoppingSaleUnitOption.id}.
     */
    option_id: string;

    /**
     * 대상 옵션 내 선택 가능한 후보 아이템의 {@link IShoppingSaleUnitOptionCandidate.id}.
     */
    candidate_id: string;
}