import { IShoppingSaleUnitOptionCandidate } from "./IShoppingSaleUnitOptionCandidate";

/**
 * 매물 유닛에서의 옵션 정보.
 * 
 * `IShoppingSaleUnitOption` 은, {@link IShoppingSale 매물}에서 취급하는 {@link IProduct 
 * 상품}을 표현하기 위하여 설계된, {@link IShoppingSaleUnit 유닛}에서, 해당 상품에 대하여 선택할
 * 수 있는 개별 옵션을 형상화한 자료구조 인터페이스이다.
 * 
 * 그리고 이 `IShoppingSaleUnitOption` 에 기재된 정보에 따라 귀속 {@link IShoppingSaleUnit 유닛}의 
 * 옵션을 구성하다보면, 결국 고객이 구매하려는 최종 구성품 {@link IShoppingSaleUnitStock 스톡}을
 * 찾아낼 수 있다. 참고로 최종 구매 상품의 가격이나 재고 수량 등의 정보도 모두 이 
 * {@link IShoppingSaleUnitStock 스톡}에 기록되어있으니, 그 중요성이 매우 크며, 
 * `IShoppingSaleUnitOption` 은 바로 그 {@link IShoppingSaleUnitStock 스톡}을 특정하기 위한 일종의
 * 이정표로 할 수 있겠다.
 * 
 * @author Samchon
 */
export interface IShoppingSaleUnitOption
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 옵션 이름
     */
    name: string;

    /**
     * 옵션에 기재할 수 있는 데이터의 타입.
     * 
     *   - `select`
     *     - 후보 아이템 중 하나를 선택하는 방식
     *     - 즉 {@link IShoppingSaleUnitOption.candidates} 를 사용하는 경우에 해당함
     *     - 아이템의 수만큼 {@link IShoppingSaleUnitStock} 의 총 수량이 곱해짐
     *   - `number`: 수치를 기입하게 함 (ex: 책상의 가로 길이)
     *   - `string`: 글자를 입력하게 함 (ex: 지갑 이니셜)
     *   - `boolean`
     *     - TRUE / FALSE (ex: 타공 여부)
     *     - {@link IShoppingSaleUnitStock} 의 수량에 영향을 주지 아니함
     *     - 만일 {@link IShoppingSaleUnitStock} 의 수량을 배증시키기를 원한다면, "select" 타입을 사용할 것
     */
    type: IShoppingSaleUnitOption.Type;

    /**
     * 해당 옵션에서 선택할 수 있는 후보 아이템들의 리스트.
     */
    candidates: IShoppingSaleUnitOptionCandidate[];
}
export namespace IShoppingSaleUnitOption
{
    /**
     * 옵션에 기재할 수 있는 데이터의 타입에 대한 literal 타입.
     * 
     *   - `select`
     *     - 후보 아이템 중 하나를 선택하는 방식
     *     - 즉 {@link IShoppingSaleUnitOption.candidates} 를 사용하는 경우에 해당함
     *     - 아이템의 수만큼 {@link IShoppingSaleUnitStock} 의 총 수량이 곱해짐
     *   - `number`: 수치를 기입하게 함 (ex: 책상의 가로 길이)
     *   - `string`: 글자를 입력하게 함 (ex: 지갑 이니셜)
     *   - `boolean`
     *     - TRUE / FALSE (ex: 타공 여부)
     *     - {@link IShoppingSaleUnitStock} 의 수량에 영향을 주지 아니함
     *     - 만일 {@link IShoppingSaleUnitStock} 의 수량을 배증시키기를 원한다면, "select" 타입을 사용할 것
     *   - `date`: 날짜 및 시간을 입력하게 함 (ex: 원하는 배송일시)
     */
    export type Type = "select" | "number" | "string" | "boolean" | "date";
}