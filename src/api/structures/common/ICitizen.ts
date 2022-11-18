/**
 * 본인 인증 정보.
 * 
 * @author Samchon
 */
export interface ICitizen
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 실명.
     */
    name: string;

    /**
     * 핸드폰 번호.
     */
    mobile: string;
}