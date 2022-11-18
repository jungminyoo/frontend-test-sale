import { IShoppingCompany } from "./IShoppingCompany";
import { IShoppingMember } from "./IShoppingMember";

/**
 * 시장 판매자.
 * 
 * `IShoppingSeller` 는 문자 그대로, 마켓에 판매자로 참여하는 {@link IShoppingMember 회원}의 정보를 
 * 표현한 인터페이스이다. 따라서 판매자는 시장에 {@link IShoppingSale 매물}을 등록하고, 
 * {@link IShoppingConsumer 고객}이 대상 매물을 {@link IShoppingOrder 구입}하였을 때, 이에 
 * 대응하여 관련 물품을 {@link IShoppingDelivery 배송}해주는 역할을 맡게 된다.
 * 
 * @author Samchon
 */
export interface IShoppingSeller
    extends IShoppingMember
{
    /**
     * 소속 회사.
     */
    company: IShoppingCompany;
}