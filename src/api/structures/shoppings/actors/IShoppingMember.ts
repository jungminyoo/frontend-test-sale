import { ICitizen } from "../../common/ICitizen";

/**
 * 회원 정보.
 * 
 * @author Samchon
 */
export interface IShoppingMember
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 시민 인증 정보.
     */
    citizen: ICitizen;

    /**
     * 계정 이메일.
     */
    email: string;

    /**
     * 계정 생성일시.
     */
    created_at: string;
}