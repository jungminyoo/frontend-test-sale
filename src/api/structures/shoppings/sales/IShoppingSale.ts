import { IAttachmentFile } from "../../common/IAttachmentFile";
import { IShoppingCategory } from "../systematic/IShoppingCategory";
import { IShoppingChannel } from "../systematic/IShoppingChannel";
import { IShoppingSaleUnit } from "./IShoppingSaleUnit";

/**
 * 매물 정보.
 * 
 * `IShoppingSale` 은 {@link IShoppingSeller 판매자}가 등록한 판매 물품, 즉 시장에서의 매물을 
 * 형상화한 자료구조 인터페이스이다. 더불어 `IShoppingSale` 은 현 시스템의 목적을 생각했을 때, 
 * 가장 중심이 되는 인터페이스이기도 하다. 실제로 거진 대부분의 자료구조 인터페이스들이, 바로 현 
 * `IShoppingSale` 을 기점으로 전개되고 있기도 하다.
 * 
 * 더하여 매물 `IShoppingSale` 은 특정 {@link IShoppingSection} 에 귀속되는 체계를 가지되, 
 * {@link IShoppingCategory} 와는 M: N 의 관계를 가진다. 즉, 하나의 `IShoppingSale` 이 여럿의
 * 카테고리를 가질 수 있다는 뜻이다. 더불어 판매자는 `IShoppingSale` 을 판매할 수 있는 
 * {@link IShoppingChannel} 을 제한할 수 있다.
 * 
 * 또한 개별 매물에는 {@link IProduct 상품}에 대응되는 {@link IShoppingSaleUnit 유닛}이
 * 복수로 존재할 수 있다. 매물을 "책상 및 책장 세트" 나 "침대 세트, 매트리스 + 프레임" 의 경우처럼
 * 여러 상품을 묶음으로 등록하는 경우가 있기 때문이다. 그리고 각 유닛은 다시 
 * {@link IShoppingSaleUnitOption 옵션}을 달리함으로써, 개별 구체화가 가능하다. 이 개별 구체화된 
 * 최종 구성품을 일컬어, {@link IShoppingSaleUnitStock 스톡}이라고 한다. 가격이니 재고 수량이니
 * 하는 것은 바로 이 스톡에 부여된다.
 * 
 * 정리하자면, {@link IShoppingConsumer 고객}이 어떤 매물을 {@link IShoppingCart 장바구니}에 담아 
 * {@link IShoppingOrder 구매}하려고 하거든, 이 때 장바구니에 넣게 되는 최종 구성품은 복수의 
 * {@link IShoppingSaleUnitStock 스톡}를 묶어 구성한 경우가 될 수 있다.
 * 
 *   - `IShoppingSale`: 매물
 *     - {@link IShoppingSaleUnit}: 매물에서 취급하는 상품
 *       - {@link IShoppingSaleUnitOption}: 선택할 수 있는 옵션
 *       - {@link IShoppingSaleUnitStock}: 최종 구성품, 옵션을 선택한 결과물
 * 
 * @author Samchon
 */
export interface IShoppingSale 
    extends IShoppingSale.ITimestamp
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 연관 카테고리.
     */
    category: IShoppingCategory.IReference;

    /**
     * 판매 채널 리스트.
     */
    channels: IShoppingChannel[];

    /**
     * 유닛 리스트.
     * 
     * 현 매물이 취급하는 {@link IProduct} 에 대하여 표현하는 레코드들로써, 해당 제품에 대하여
     * 제공하는 {@link IShoppingSaleUnitOption 옵션} 및, 해당 옵션을 선택하여 구성할 수 있는 최종
     * 구성품 {@link IShoppingSaleUnitStock} 에 대한 정보를 담고 있다.
     */
    units: IShoppingSaleUnit[];

    /**
     * 태그 리스트.
     */
    tags: string[];

    //----
    // STORIES
    //----
    // /**
    //  * 배송 계획 리스트.
    //  */
    // delivery_plans: IShoppingSaleDeliveryPlan[];

    /**
     * 대표 이미지 리스트.
     */
    representative_images: IAttachmentFile[];

    /**
     * 컨텐츠 서술 정보.
     */
    content: IShoppingSale.IContent;

    /**
     * 레코드 생성 일시.
     */
    created_at: string;

    /**
     * 레코드 수정 일시.
     */
    updated_at: string;
}
export namespace IShoppingSale
{
    /**
     * 컨텐츠 서술 정보.
     */
    export interface IContent
    {
        /**
         * 제목.
         */
        title: string;

        /**
         * 본문 서술 내역.
         */
        body: string;

        /**
         * 교환 및 환불 정책에 대한 서술 내역.
         */
        revert_policy: string;
    }

    /**
     * 매물에 관한 시점 정보들
     */
    export interface ITimestamp
    {
        /**
         * 레코드 생성 일시.
         */
        created_at: string;

        /**
         * 레코드 수정 일시.
         */
        updated_at: string;

        /**
         * 판개 개시일시.
         */
        opened_at: string | null;

        /**
         * 판매 종료일시.
         */
        closed_at: string | null;

        /**
         * 판매 일시 중단일시.
         * 
         * {@link IShoppingSeller 판매자}가 모종의 이유로 매물의 판매를 일시적으로 중지한 시각.
         * 
         * 만일 이 값이 `null` 이 아니라면, {@link IShoppingConsumer 고객}은 여전히 리스트 및 상세 
         * 페이지에서 해당 매물을 조회할 수 있되, 해당 매물에는 "판매가 일시 중지된 상품입니다" 라는 
         * 라벨이 붙는다.
         * 
         * 더하여 판매자가 해당 매물의 "판매 일시 중단" 상태를 해소하기 전까지, 고객은 이를
         * {@link IShoppingCartCommodity 장바구니}에 담을 수 없다. 다만 판매자가 "판매 일시 중단" 
         * 상태를 기록하던 와중에 이미 {@link IShoppingOrder 주문} 단계까지 이른 경우만큼은 예외로써, 
         * 이 경우에는 {@link IShoppingOrderGoodRejection 판매 거절} 기능을 사용해야 할 수도 있다.
         */
        paused_at: string | null;

        /**
         * 전시 및 판매 중단일시.
         * 
         * {@link IShoppingSeller 판매자}가 모종의 이유로 매물의 전시 및 판매를 중지한다.
         * 
         * 만일 이 값이 `null` 이 아니라면, {@link IShoppingConsumer 고객}은 해당 매물을 리스트 및
         * 상세 페이지에서 일절 조회할 수 없으니, 사실상 SOFT DELETION 에 해당한다. 물론, 판매 
         * 당사자나 {@link IShoppingAdministrator 관리자}는 계속 조회가 가능하다.
         * 
         * 더하여 판매자가 해당 매물의 "전시 중단" 상태를 해소하기 전까지, 고객은 이를
         * {@link IShoppingCartCommodity 장바구니}에 담을 수 없다. 다만 판매자가 "전시 중단" 상태를 
         * 기록하던 와중에 이미 {@link IShoppingOrder 주문} 단계까지 이른 경우만큼은 예외로써, 이 
         * 경우에는 {@link IShoppingOrderGoodRejection 판매 거절} 기능을 사용해야 할 수도 있다.
         */
        suspended_at: string | null;
    }
}