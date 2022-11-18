/**
 * 첨부파일 정보.
 * 
 * @author Samchon
 */
export interface IAttachmentFile
{
    /**
     * 파일명.
     */
    name: string;

    /**
     * 확장자.
     */
    extension: string | null;

    /**
     * 파일 경로.
     */
    url: string;
}