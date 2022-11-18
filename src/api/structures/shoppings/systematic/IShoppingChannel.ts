/**
 * 유통 채널 정보.
 * 
 * `IShoppingChannel` 은 시장에서의 유통 채널을 형상화하기 위하여 설계된 자료구조 인터페이스이다.
 * 
 * 그리고 이 `IShoppingChannel` 을 오프라인 시장에 빗대어 표현한다면, `IShoppingChannel` 은 곧
 * 매장에 해당한다. 즉, `IShoppingChannel` 이 서로 다르다는 말은, 오프라인 상에서 아주 다른 가게라는
 * 뜻이다.
 * 
 * @author Samchon
 */
export interface IShoppingChannel
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 채널 코드.
     */
    code: string;

    /**
     * 채널명.
     */
    name: string;

    /**
     * 배타 여부.
     * 
     * 이 값이 `true` 이거든, 해당 채널은 다른 채널과 단절됨.
     */
    exclusive: boolean;
}