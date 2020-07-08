// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useRef, useEffect } from 'react';

import { Heading } from '../../../ui/Heading';
import { Label } from '../../../ui/Label';
import { useMeetingManager } from '../../../../providers/MeetingProvider';
import { useVideoInputs } from '../../../../providers/DevicesProvider';
import { useAudioVideo } from '../../../../providers/AudioVideoProvider';

import QualitySelection from './QualitySelection';
import DeviceInput from '../DeviceInput';

import { StyledVideoPreview, title } from '../Styled';

const CameraSelection = () => {
  const meetingManager = useMeetingManager();
  const audioVideo = useAudioVideo();
  const { devices } = useVideoInputs();
  const videoEl = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!audioVideo) {
      return;
    }

    videoEl.current &&
      audioVideo?.startVideoPreviewForVideoInput(videoEl.current);

    return () => {
      videoEl.current &&
        audioVideo?.stopVideoPreviewForVideoInput(videoEl.current);
    };
  }, [audioVideo]);

  async function selectVideoInput(deviceId: string) {
    meetingManager.selectVideoInputDevice(deviceId);
  }

  return (
    <div>
      <Heading tag="h2" level={6} css={title}>
        Video
      </Heading>
      <DeviceInput
        label="Camera source"
        onChange={selectVideoInput}
        devices={devices}
      />
      <QualitySelection />
      <Label style={{ display: 'block', marginBottom: '.5rem' }}>
        Video preview
      </Label>
      <StyledVideoPreview ref={videoEl} />
    </div>
  );
};

export default CameraSelection;