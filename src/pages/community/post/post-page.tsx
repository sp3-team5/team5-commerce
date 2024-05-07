import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';

import * as S from './post-page-style';

export const CommunityPostPage = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = async (data) => {
    console.log('form submitted', data);

    if (!selectedRegion) {
      alert('지역을 선택해주세요.');

      return;
    }

    if (!thumbnailFile) {
      alert('썸네일 이미지를 선택해주세요.');

      return;
    }

    try {
      // 프리사인 URL 요청
      const fileName = thumbnailFile.name;
      console.log('fileName:', fileName);

      const preSignedResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fileName }),
        credentials: 'include',
      });

      if (!preSignedResponse.ok) throw new Error('프리사인 URL 요청에 실패했습니다.');

      const preSignedData = await preSignedResponse.json();
      const { presignedUrl } = preSignedData;

      // 프리사인 URL로 파일 업로드
      const uploadResponse = await fetch(presignedUrl, {
        method: 'PUT',
        body: thumbnailFile,
        headers: {
          'Content-Type': thumbnailFile.type,
        },
      });

      if (!uploadResponse.ok) throw new Error('파일 업로드에 실패했습니다.');

      const s3BucketBaseUrl = 'https://midcon-bucket.s3.ap-northeast-2.amazonaws.com/';
      const thumbnailUrl = `${s3BucketBaseUrl}${fileName}`;

      // 업로드된 파일의 URL을 서버로 전송
      const postData = {
        title: data.title,
        content: data.content,
        region: selectedRegion,
        thumbnail: thumbnailUrl,
      };

      console.log('postData:', postData);

      const postResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
        credentials: 'include',
      });

      if (!postResponse.ok) throw new Error('게시물 업로드에 실패했습니다.');

      alert('게시물이 성공적으로 업로드되었습니다.');
      reset();
      setSelectedRegion('');
      setThumbnailPreview('');
      setThumbnailFile(null);
    } catch (error) {
      alert(`오류 발생: ${error.message}`);
    }
  };

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
      setThumbnailFile(file);
    } else {
      setThumbnailFile(null);
    }
  };

  const regionList = [
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
    '해외',
  ];

  return (
    <S.PostPage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.HeaderArea>
          <S.HeaderTitle>커뮤니티 등록</S.HeaderTitle>
          <S.ButtonArea>
            <S.TempSaveButton>
              <S.TempSaveButtonText>임시저장</S.TempSaveButtonText>
            </S.TempSaveButton>
            <S.PostButton type='submit'>
              <S.PostButtonIconWrapper>
                <Image src='/images/button/add-button.svg' alt='add-button' fill />
              </S.PostButtonIconWrapper>
              <S.buttonTextWrapper>커뮤니티 등록</S.buttonTextWrapper>
            </S.PostButton>
          </S.ButtonArea>
        </S.HeaderArea>

        <S.CategoryArea>
          <S.CategoryTitleBox>
            <S.CategoryTitle>지역 선택</S.CategoryTitle>
            <div>
              <S.CategortyParagraph>나와 가까운 이용자들과의</S.CategortyParagraph>
              <S.CategortyParagraph>원활한 소통을 위하여 지역을 선택해주세요.</S.CategortyParagraph>
            </div>
          </S.CategoryTitleBox>
          <S.RegionBox>
            <S.RegionSelectBoxTitle>지역 선택</S.RegionSelectBoxTitle>
            <S.RegionSelectBox>
              {regionList.map((region) => (
                <S.RegionSelectItem
                  key={region}
                  onClick={() => handleRegionSelect(region)}
                  style={{
                    backgroundColor: selectedRegion === region ? '#43ADFF' : '',
                    color: selectedRegion === region ? '#FFFFFF' : '',
                  }}
                >
                  {region}
                </S.RegionSelectItem>
              ))}
            </S.RegionSelectBox>
          </S.RegionBox>
        </S.CategoryArea>

        <S.TitleInputArea>
          <S.TitleInputTitle>제목을 입력해주세요.</S.TitleInputTitle>
          <S.TitleInputBox>
            <S.TitleInput
              placeholder='제목을 20자내로 작성해주세요.'
              {...register('title', { required: true, maxLength: 20 })}
            />
            <S.TitleInputCounter>{watch('title', '').length}/20</S.TitleInputCounter>
          </S.TitleInputBox>
        </S.TitleInputArea>

        <S.TextEditorArea>
          <S.TextEditorTitle>내용을 입력해주세요.</S.TextEditorTitle>
          <textarea placeholder='내용을 입력해주세요.' {...register('content', { required: true })} />
        </S.TextEditorArea>

        <S.PostThumnailImageArea>
          <S.PostThumnailImageAreaTitleBox>
            <S.PostThumnailImageAreaTitle>대표이미지</S.PostThumnailImageAreaTitle>
            <S.PostThumnailImageAreaSubTitle>대표 이미지를 넣어주세요.</S.PostThumnailImageAreaSubTitle>
          </S.PostThumnailImageAreaTitleBox>
          <S.ThumnailUploadBox>
            <S.ThumnailUploadBoxTitle>대표이미지</S.ThumnailUploadBoxTitle>
            <S.ThumnailUploadBoxSubTitle>* 썸네일로 보여지는 이미지입니다.</S.ThumnailUploadBoxSubTitle>
            <S.UploadLabel htmlFor='thumnail-upload'>
              <S.UploadIconWrapper>
                <Image src='/images/icon/upload-file-icon.svg' alt='upload-icon' fill />
              </S.UploadIconWrapper>
              <S.UploadSpan>이미지 업로드</S.UploadSpan>
              <S.HideInput id='thumnail-upload' type='file' onChange={handleThumbnailChange} />
              {thumbnailPreview && (
                <div>
                  <Image src={thumbnailPreview} alt='thumbnail-preview' width={200} height={200} />
                </div>
              )}
            </S.UploadLabel>
          </S.ThumnailUploadBox>
        </S.PostThumnailImageArea>
      </form>
    </S.PostPage>
  );
};
