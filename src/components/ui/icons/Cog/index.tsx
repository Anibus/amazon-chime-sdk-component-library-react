// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import Svg, { SvgProps } from '../Svg';

const Cog: React.SFC<SvgProps> = props => (
  <Svg {...props}>
    <path d="M12.616 4C13.379 4 14 4.62 14 5.384c0 .31.171.566.457.684.286.118.588.059.808-.16.539-.54 1.415-.54 1.956-.001l.872.873c.539.539.539 1.417 0 1.956-.22.219-.28.52-.161.807.118.286.374.457.684.457.763 0 1.384.62 1.384 1.384v1.233C20 13.38 19.379 14 18.616 14c-.309 0-.565.17-.684.458-.119.286-.059.588.161.807.539.54.539 1.417 0 1.956l-.872.873c-.541.539-1.417.539-1.956 0-.22-.22-.522-.28-.808-.161-.286.119-.457.374-.457.684C14 19.38 13.379 20 12.616 20h-1.233C10.62 20 10 19.38 10 18.617c0-.31-.171-.565-.457-.684-.292-.12-.589-.06-.808.16-.539.539-1.417.54-1.956 0l-.872-.872c-.261-.261-.405-.608-.406-.978 0-.37.145-.717.406-.98.219-.217.28-.52.16-.805-.119-.287-.375-.458-.684-.458C4.62 14 4 13.38 4 12.617v-1.233C4 10.62 4.62 10 5.383 10c.309 0 .566-.171.684-.457.119-.286.059-.588-.16-.807-.261-.261-.406-.61-.406-.978 0-.37.145-.717.406-.98l.872-.87c.537-.54 1.415-.541 1.956 0 .219.219.523.28.807.16.287-.118.458-.374.458-.684C10 4.62 10.62 4 11.383 4zm0 1h-1.233c-.211 0-.383.172-.383.384 0 .717-.412 1.334-1.075 1.608-.662.274-1.39.13-1.897-.377-.15-.15-.391-.15-.542 0l-.872.872c-.073.072-.113.169-.113.27 0 .103.04.199.113.272.507.507.652 1.234.377 1.897-.274.663-.89 1.074-1.608 1.074-.211 0-.383.172-.383.384v1.233c0 .21.172.383.383.383.718 0 1.334.412 1.608 1.075.275.663.13 1.39-.377 1.897-.073.073-.113.169-.113.27.001.104.04.199.113.27l.872.875c.152.15.393.149.542 0 .337-.338.772-.515 1.22-.515.226 0 .455.045.677.137.663.275 1.075.89 1.075 1.608 0 .21.172.383.383.383h1.233c.212 0 .384-.172.384-.383 0-.717.411-1.333 1.074-1.608.659-.272 1.389-.13 1.898.378.149.149.394.149.542-.001l.872-.872c.149-.15.149-.393 0-.542-.508-.507-.653-1.234-.378-1.897.274-.663.89-1.075 1.608-1.075.212 0 .384-.172.384-.383v-1.233c0-.212-.172-.384-.384-.384-.718 0-1.334-.412-1.608-1.075-.275-.662-.13-1.39.378-1.896.149-.15.149-.393 0-.542l-.872-.872c-.15-.15-.393-.15-.542 0-.509.508-1.239.65-1.898.377C13.412 6.717 13 6.1 13 5.384c0-.212-.172-.384-.384-.384zM12 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4zm0 1c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z" />
  </Svg>
);

Cog.displayName = "Cog";

export default Cog;