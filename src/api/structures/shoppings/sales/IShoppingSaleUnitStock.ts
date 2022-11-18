import { IAttachmentFile } from "../../common/IAttachmentFile";
import { IShoppingPrice } from "../systematic/IShoppingPrice";
import { IShoppingSaleUnitStockElement } from "./IShoppingSaleUnitStockElement";

/**
 * 매물 유닛에서의 최종 구성품 정보.
 * 
 * `IShoppingSaleUnitStock` 은, {@link IShoppingSaleUnit 유닛}에서 제공하는 
 * {@link IShoppingSaleUnitOption 옵션} 및 {@link IShoppingSaleUnitOptionCandidate 후보 아이템}
 * 들을 전부 골랐을 때, 도출될 수 있는 최종 구성품의 경우의 수 중 하나를 표현하기 위하여 설계된 
 * 자료구조 인터페이스이다.
 * 
 * 따라서 `IShoppingSaleUnitStock` 이 곧 해당 유닛에서의 최종 구성품이며, 해당 구성품의 가격이나
 * 잔여 재고수량 등, 이른바 최종 판매물에 해당하는 속성들이 모두 이에 귀속된다.
 * 
 * @author Samchon
 */
export interface IShoppingSaleUnitStock
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 스톡의 이름.
     */
    name: string;

    /**
     * 비 활성화 여부
     */
    disabled: boolean;

    /**
     * 가격 정보.
     * 
     * 현 최종 구성품의 명목 및 실질 가격 등.
     */
    price: IShoppingPrice;

    /**
     * 재고 수량 정보.
     * 
     * 현 최종 구성품의 총 입출고 수량 등.
     */
    inventory: IShoppingSaleUnitStock.IInventory;

    /**
     * 스톡의 구성요소 리스트. 
     * 
     * 현 스톡이 어떤 {@link IShoppingSaleUnitOption} 및 {@link IShoppingSaleUnitOptionCandidate}
     * 들을 선택하여 구성된 것인가를 가르키는 배열. Front Application 개발자는 이 정보를 참조하여,
     * 고객이 선택한 {@link IShoppingSaleUnitOption} 및 {@link IShoppingSaleUnitOptionCandidate}
     * 가 어떠한 `IShoppingSaleUnitStock` 를 가르키는지 계산할 수 있다.
     */
    elements: IShoppingSaleUnitStockElement[];

    /**
     * 이미지 리스트.
     */
    images: IAttachmentFile[];
}
export namespace IShoppingSaleUnitStock
{
    /**
     * 재고 수량 정보.
     */
    export interface IInventory
    {
        /**
         * 총 입구 수량.
         */
        income: number;

        /**
         * 현재 예약된 수량.
         */
        reserve: number;

        /**
         * 총 출고 수량.
         */
        outcome: number;
    }
}