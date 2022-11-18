import { IBrand } from "../../common/IBrand";
import { IProduct } from "../../common/IProduct";
import { IShoppingSaleUnitOption } from "./IShoppingSaleUnitOption";
import { IShoppingSaleUnitStock } from "./IShoppingSaleUnitStock";

/**
 * 매물에서 취급하는 제품 정보.
 * 
 * `IShoppingSaleUnit` 은 {@link IShoppingSale 매물}에서 취급하는 {@link IProduct 제품}을 표현하기 
 * 위하여 설계된 자료구조 인터페이스이다. 
 * 
 * 단, IShoppingSaleUnit` 이 곧 최종 판매 상품을 의미하는 것은 아니다. 그 역할은, 유닛 내 다양한 
 * {@link IShoppingSaleUnitOption 옵션}을 선택한 결과 구성되는, {@link IShoppingSaleUnitStock 스톡}이 
 * 맡는다. 따라서 최종 판매 구성품의 가격이나 재고 수량에 관한정보도 모두 {@link IShoppingSaleUnitStock} 에 
 * 저장된다.
 * 
 *  그리고 `IShoppingSaleUnit` 가 {@link IShoppingSale} 에 통합되지 않고 도리어 N: 1 의 관계를 가지는 이유는 
 * 바로, {@link IShoppingSeller 판매자}의 성향에 따라, 몇 가지 상품을 묶어 패키지로 판매하는 경우가 왕왕 
 * 있기 때문이다.
 * 
 *   - 침대 세트: 프레임 + 매트리스
 *   - 컴퓨터 세트: 본체 + 모니터 + 키보드 + 마우스
 *   - 책상 세트: 책상 + 책장 + 서랍
 * 
 * @author Samchon
 */
export interface IShoppingSaleUnit
{
    /**
     * Primary Key.
     */
    id: string;
    
    /**
     * 취급 제품 정보.
     */
    product: IProduct;

    /**
     * 귀속 브랜드 정보.
     */
    brand: IBrand;

    /**
     * 유닛 이름.
     */
    name: string;

    /**
     * 유닛 (제품) 의 상태
     */
    state: IShoppingSaleUnit.State;

    /**
     * 주 유닛 여부.
     * 
     * `IShoppingSaleUnit.primary` 는 현재의 유닛이 취급하는 {@link product 제품}이 귀속 
     * {@link IShoppingSale 매물}의 주 유닛에 해당하는가를 의미하는 속성 변수이다. 예를 들어
     * 위 본문의 예시로 들었던 컴퓨터 세트라면, 컴퓨터 본체 정도가 주 유닛이 될 듯하다.
     * 
     *   - 컴퓨터 세트
     *     - 컴퓨터 본체 (주, 필수)
     *     - 모니터 (주, 필수 아님)
     *     - 키보드 (부, 필수 아님)
     *     - 마우스 (부, 필수 아님)
     * 
     * 단, `primary` 값이 `true` 라 하여, 그것이 반드시 {@link required 필수}일 필요는 없다.
     * `primary` 는 단지 상태를 표현하기 위한 속성값일 뿐, {@link required} 처럼 제약사항을 
     * 내포하는 변수는 아니다.
     */
    primary: boolean;

    /**
     * 필수 선택 여부.
     * 
     * `IShoppingSaleUnit.primary` 는 현재의 유닛이 취급하는 {@link product 제품}이 귀속
     * {@link IShoppingSale 매물}을 구매함에 잇어 필수로 선택해야 하는 지를 의미하는 제약사항 
     * 변수이다. 위 본문의 예시로 들었던 책상 세트에서, 책상 정도에 해당한다고 볼 수 있겠다.
     * 
     * 단, `required` 값이 `true` 라 하여, 그것이 반드시 {@link primary 주}라는 보장은 없다.
     * 
     *   - 책상 세트
     *     - 책상 (주, 필수)
     *     - 책장 (부, 필수)
     *     - 서랍 (부, 필수 아님)
     */
    required: boolean;

    /**
     * 선택 가능 옵션 리스트.
     * 
     * 해당 유닛에 대하여, 어떤 옵션을 선택할 수 있는 지에 관한 정보.
     */
    options: IShoppingSaleUnitOption[];

    /**
     * 최종 구성품 리스트.
     * 
     * 위 {@link options} 에서 특정 {@link IShoppingSaleUnitOption 옵션} 내지 특정 
     * {@link IShoppingSaleUnitOptionCandidate 후보 아이템}을 선택하였을 때, 이에 맞는 최종 구성품은 
     * 무엇이며, 이 때의 가격 내지 잔여 재고 수량 정보 등은 어떻게 되는 지 등의 정보들을 제공한다.
     */
    stocks: IShoppingSaleUnitStock[];
}
export namespace IShoppingSaleUnit
{
    /**
     * 유닛 (제품) 의 상태.
     * 
     *   - NEW: 신제품
     *   - SECONDHAND: 중고제품
     *   - POST: 선주문 후제작
     *   - CUSTOM: 커스텀 주문 제작
     */
    export type State = 'NEW' | 'SECONDHAND' | 'POST' | 'CUSTOM';
}