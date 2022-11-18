import { IAttachmentFile } from "../../common/IAttachmentFile";

/**
 * 매물 유닛에서의 옵션 중, 선택 가능한 개별 후보 요소의 정보.
 * 
 * `IShoppingSaleUnitOptionCandidate` 은 그것의 귀속 {@link IShoppingSaleUnitOption.type 옵션의
 * 타입}이 `"select"` 일 때, 선택할 있는 개별 후보 요소를 표현한 자료구조 인터페이스이다. 즉,
 * `IShoppingSaleUnitOptionCandidate` 는 일반적으로 `ComboBox` 에서 선택할 수 있는 일개 아이템
 * 요소에 해당한다, 그렇게 이해하면 된다.
 * 
 * 단, 이처럼 {@link IShoppingSaleUnitOption.type 옵션의 타입}이 `"select"` 라 지금처럼
 * `IShoppingSaleUnitOptionCandidate` 레코드가 필요한 경우, 그 수량에 따라 최종적으로 필요해지는
 * {@link IShoppingSaleUnitStock 스톡}의 총 수효가 기하급수적으로 늘어날 수 있으니, 이에 주의하기
 * 바란다.
 * 
 *   - 노트북에 대한 {@link IShoppingSaleUnit}, 선택할 수 있는 옵션들은 아래와 같다.
 *     - CPU: i3, i5, i7, i9
 *     - RAM: 8GB, 16GB, 32GB, 64GB
 *     - SSD: 128GB, 256GB, 512GB, 1TB
 *   - 이 때, 필요한 {@link IShoppingSaleUnitStock 스톡}의 총 수효는 모두 `(4 x 4 x 4) = 64` 개
 * 
 * @author Samchon
 */
export interface IShoppingSaleUnitOptionCandidate
{
    /**
     * Primary Key.
     */
    id: string;

    /**
     * 선택 가능 후보 요소의 이름.
     */
    name: string;

    /**
     * 이미지 리스트.
     */
    images: IAttachmentFile[];
}