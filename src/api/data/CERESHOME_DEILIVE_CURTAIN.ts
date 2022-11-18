import { IShoppingSale } from "../structures/shoppings/sales/IShoppingSale";

export const CERESHOME_DEILIVE_CURTAIN: IShoppingSale = {
    "id": "408755e9-91ca-46cf-98da-02556004f901",
    "category": {
        "id": "0d8d7f13-4a7f-498f-bc9f-62c45a10ad87",
        "parent": {
            "id": "ddd8f586-e384-4b7a-978e-c8ab91ab0b30",
            "parent": {
                "id": "3e72ca1a-fb0e-4630-bcbd-b2026bb016d5",
                "parent": {
                    "id": "5fc73966-166c-40e7-888f-fc98da444564",
                    "parent": null,
                    "code": "fabric",
                    "name": "패브릭",
                    "created_at": "Thu Dec 16 2021 12:39:54 GMT+0900 (Korean Standard Time)"
                },
                "code": "curtains",
                "name": "커튼",
                "created_at": "Thu Dec 16 2021 12:39:54 GMT+0900 (Korean Standard Time)"
            },
            "code": "curtain",
            "name": "커튼",
            "created_at": "Thu Dec 16 2021 12:39:54 GMT+0900 (Korean Standard Time)"
        },
        "code": "general_curtain",
        "name": "일반커튼",
        "created_at": "Thu Dec 16 2021 12:39:54 GMT+0900 (Korean Standard Time)"
    },
    "channels": [
        {
            "id": "f7b3ce76-23d3-489b-a54e-c7609abe6a46",
            "code": "seesoop",
            "name": "시숲",
            "exclusive": true
        }
    ],
    "units": [
        {
            "id": "f93d4950-9242-4a2e-bac5-ea6a98d3022a",
            "product": {
                "id": "c1bc8bfa-5372-4e70-a41c-f17c579c0b24",
                "manufacturer": {
                    "id": "4ec42d90-6de5-48ee-b3ba-e834821b7356",
                    "name": "세레스홈"
                },
                "name": "데이리브 가림막 커튼 분리형",
                "tangible": true
            },
            "brand": {
                "id": "e4c3db59-460c-4d65-a93c-f935a5ced3e0",
                "name": "세레스홈"
            },
            "name": "커튼 옵션",
            "state": "NEW",
            "primary": true,
            "required": true,
            "options": [
                {
                    "id": "8d847dea-743e-4146-bca3-1cc27443a12e",
                    "name": "원단 사이즈",
                    "type": "select",
                    "candidates": [
                        {
                            "id": "8c065954-e6f2-4834-9494-0d85fed01c03",
                            "name": "85x120",
                            "images": []
                        },
                        {
                            "id": "51935f11-b063-468f-9c57-e108e20bd124",
                            "name": "135x150",
                            "images": []
                        },
                        {
                            "id": "5a15d00a-016b-49d6-a14d-9893ef9fabc2",
                            "name": "135x230m",
                            "images": []
                        }
                    ]
                },
                {
                    "id": "9ffe277d-cab7-49ae-a67f-27a5734850c2",
                    "name": "색상",
                    "type": "select",
                    "candidates": [
                        {
                            "id": "71db004f-ad8e-4b02-90a9-00d98a85a2b2",
                            "name": "화이트",
                            "images": []
                        },
                        {
                            "id": "54a6cc50-a7c4-4011-9bd2-bba949f6f9ed",
                            "name": "블랙",
                            "images": []
                        }
                    ]
                }
            ],
            "stocks": [
                {
                    "id": "e9d119f3-9b7d-4c32-a1d8-602a7fe40602",
                    "name": "85x120, 화이트",
                    "disabled": false,
                    "price": {
                        "nominal": 29900,
                        "real": 29900,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 999,
                        "reserve": 5,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "8d847dea-743e-4146-bca3-1cc27443a12e",
                            "candidate_id": "8c065954-e6f2-4834-9494-0d85fed01c03"
                        },
                        {
                            "option_id": "9ffe277d-cab7-49ae-a67f-27a5734850c2",
                            "candidate_id": "71db004f-ad8e-4b02-90a9-00d98a85a2b2"
                        }
                    ],
                    "images": [
                        {
                            "name": "be161798-a4db-416b-ad87-08133b2b76c8.png",
                            "extension": "png",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/be161798-a4db-416b-ad87-08133b2b76c8.png"
                        }
                    ]
                },
                {
                    "id": "9410b23e-1ad2-410c-a115-407be8322394",
                    "name": "85x120, 블랙",
                    "disabled": false,
                    "price": {
                        "nominal": 29900,
                        "real": 29900,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 999,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "8d847dea-743e-4146-bca3-1cc27443a12e",
                            "candidate_id": "8c065954-e6f2-4834-9494-0d85fed01c03"
                        },
                        {
                            "option_id": "9ffe277d-cab7-49ae-a67f-27a5734850c2",
                            "candidate_id": "54a6cc50-a7c4-4011-9bd2-bba949f6f9ed"
                        }
                    ],
                    "images": [
                        {
                            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
                        }
                    ]
                },
                {
                    "id": "286d7c74-ffee-44c2-8abc-2a1f97adfa97",
                    "name": "135x150, 화이트",
                    "disabled": false,
                    "price": {
                        "nominal": 39900,
                        "real": 39900,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 999,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "8d847dea-743e-4146-bca3-1cc27443a12e",
                            "candidate_id": "51935f11-b063-468f-9c57-e108e20bd124"
                        },
                        {
                            "option_id": "9ffe277d-cab7-49ae-a67f-27a5734850c2",
                            "candidate_id": "71db004f-ad8e-4b02-90a9-00d98a85a2b2"
                        }
                    ],
                    "images": [
                        {
                            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
                        }
                    ]
                },
                {
                    "id": "c3b00ec0-f7fd-4de4-8f38-ff912847a0ca",
                    "name": "135x150, 블랙",
                    "disabled": false,
                    "price": {
                        "nominal": 39900,
                        "real": 39900,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 999,
                        "reserve": 1,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "8d847dea-743e-4146-bca3-1cc27443a12e",
                            "candidate_id": "51935f11-b063-468f-9c57-e108e20bd124"
                        },
                        {
                            "option_id": "9ffe277d-cab7-49ae-a67f-27a5734850c2",
                            "candidate_id": "54a6cc50-a7c4-4011-9bd2-bba949f6f9ed"
                        }
                    ],
                    "images": [
                        {
                            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
                        }
                    ]
                },
                {
                    "id": "09bf3a53-93f0-4827-813b-89a94a62fc0b",
                    "name": "135x230m, 화이트",
                    "disabled": false,
                    "price": {
                        "nominal": 46900,
                        "real": 46900,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 999,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "8d847dea-743e-4146-bca3-1cc27443a12e",
                            "candidate_id": "5a15d00a-016b-49d6-a14d-9893ef9fabc2"
                        },
                        {
                            "option_id": "9ffe277d-cab7-49ae-a67f-27a5734850c2",
                            "candidate_id": "71db004f-ad8e-4b02-90a9-00d98a85a2b2"
                        }
                    ],
                    "images": [
                        {
                            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
                        }
                    ]
                },
                {
                    "id": "7c353bd1-aeb0-4ec6-ab29-1e867e777677",
                    "name": "135x230m, 블랙",
                    "disabled": false,
                    "price": {
                        "nominal": 46900,
                        "real": 46900,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 999,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "8d847dea-743e-4146-bca3-1cc27443a12e",
                            "candidate_id": "5a15d00a-016b-49d6-a14d-9893ef9fabc2"
                        },
                        {
                            "option_id": "9ffe277d-cab7-49ae-a67f-27a5734850c2",
                            "candidate_id": "54a6cc50-a7c4-4011-9bd2-bba949f6f9ed"
                        }
                    ],
                    "images": [
                        {
                            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
                        }
                    ]
                }
            ]
        },
        {
            "id": "b501a899-db20-4c48-afd8-360b3089dca2",
            "product": {
                "id": "42235e2a-843e-48fc-8f72-3460fc0d327b",
                "manufacturer": {
                    "id": "4ec42d90-6de5-48ee-b3ba-e834821b7356",
                    "name": "세레스홈"
                },
                "name": "추가상품",
                "tangible": true
            },
            "brand": {
                "id": "e4c3db59-460c-4d65-a93c-f935a5ced3e0",
                "name": "세레스홈"
            },
            "name": "추가상품 (선택)",
            "state": "NEW",
            "primary": false,
            "required": false,
            "options": [
                {
                    "id": "e118f4bb-20a8-46a9-8b0b-6e2711dc37ef",
                    "name": "커튼봉",
                    "type": "select",
                    "candidates": [
                        {
                            "id": "c52dddc0-9997-468f-a7db-a4da8853da09",
                            "name": "3자",
                            "images": []
                        },
                        {
                            "id": "293858e9-3aea-4f0b-995f-43c930abd1f1",
                            "name": "4자",
                            "images": []
                        },
                        {
                            "id": "00cedd4e-bdc9-47f4-85ff-7f3882e1ecea",
                            "name": "6자",
                            "images": []
                        }
                    ]
                },
                {
                    "id": "ffa0ac8b-6cbf-4780-a839-2c9bf9b82bfd",
                    "name": "각인",
                    "type": "string",
                    "candidates": []
                },
                {
                    "id": "568e4d37-fdce-4791-b0e5-23a880952f38",
                    "name": "숫자",
                    "type": "number",
                    "candidates": []
                }
            ],
            "stocks": [
                {
                    "id": "0433c9b7-6bc3-4418-8563-126e285061c2",
                    "name": "3자",
                    "disabled": false,
                    "price": {
                        "nominal": 0,
                        "real": 0,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "e118f4bb-20a8-46a9-8b0b-6e2711dc37ef",
                            "candidate_id": "c52dddc0-9997-468f-a7db-a4da8853da09"
                        }
                    ],
                    "images": [
                        {
                            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
                        }
                    ]
                },
                {
                    "id": "f6eb7438-9a5c-49f7-9ff9-4961d8fccb3c",
                    "name": "4자",
                    "disabled": false,
                    "price": {
                        "nominal": 0,
                        "real": 0,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 1,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "e118f4bb-20a8-46a9-8b0b-6e2711dc37ef",
                            "candidate_id": "293858e9-3aea-4f0b-995f-43c930abd1f1"
                        }
                    ],
                    "images": [
                        {
                            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
                        }
                    ]
                },
                {
                    "id": "2c0c7007-d2df-42bd-ae18-41f3fd77a3ba",
                    "name": "6자",
                    "disabled": false,
                    "price": {
                        "nominal": 0,
                        "real": 0,
                        "tax_ratio": 0.1
                    },
                    "inventory": {
                        "income": 100,
                        "reserve": 0,
                        "outcome": 0
                    },
                    "elements": [
                        {
                            "option_id": "e118f4bb-20a8-46a9-8b0b-6e2711dc37ef",
                            "candidate_id": "00cedd4e-bdc9-47f4-85ff-7f3882e1ecea"
                        }
                    ],
                    "images": [
                        {
                            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
                            "extension": "jpeg",
                            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
                        }
                    ]
                }
            ]
        }
    ],
    "tags": [
        "가리개",
        "세레스홈",
        "창문가리개",
        "커튼"
    ],
    "representative_images": [
        {
            "name": "8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg",
            "extension": "jpeg",
            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/8abd9cce-1a33-4b3d-b068-4f11915e0051.jpeg"
        },
        {
            "name": "4f38e0d9-10f4-46eb-9050-d029c7479809.jpeg",
            "extension": "jpeg",
            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/4f38e0d9-10f4-46eb-9050-d029c7479809.jpeg"
        },
        {
            "name": "cafef837-8547-471e-99ae-eb1457bcef9d.jpeg",
            "extension": "jpeg",
            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/cafef837-8547-471e-99ae-eb1457bcef9d.jpeg"
        },
        {
            "name": "67289756-01cc-4c54-a229-5288bd9f6d74.jpeg",
            "extension": "jpeg",
            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/67289756-01cc-4c54-a229-5288bd9f6d74.jpeg"
        },
        {
            "name": "028f0530-5973-4e73-9b4b-1b5d79105042.jpeg",
            "extension": "jpeg",
            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/028f0530-5973-4e73-9b4b-1b5d79105042.jpeg"
        },
        {
            "name": "efc87bc5-a6c7-48cb-880f-791802ef6cd7.jpeg",
            "extension": "jpeg",
            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/efc87bc5-a6c7-48cb-880f-791802ef6cd7.jpeg"
        },
        {
            "name": "62143906-d469-4d98-a197-26e7a216a040.jpeg",
            "extension": "jpeg",
            "url": "https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/dev/62143906-d469-4d98-a197-26e7a216a040.jpeg"
        }
    ],
    "content": {
        "title": "데이리브 가림막 커튼 분리형",
        "body": "<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/8226ff05-7c83-44de-b9e9-8e7fbc2a9e29.jpeg\" alt=\"\" style=\"height: 1237.8px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/22e27454-7bc7-4f14-8765-85db6cae331a.jpeg\" alt=\"\" style=\"height: 2119.64px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/31ed1707-2a4c-4491-8bba-7a0de3c60224.jpeg\" alt=\"\" style=\"height: 1469.11px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/b7e29bfa-3a3e-4d83-bd90-c754a6f4f1ef.jpeg\" alt=\"\" style=\"height: 1246.3px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/1754347a-a0a5-4456-84d8-8ca7d8fd339b.jpeg\" alt=\"\" style=\"height: 2692.75px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/4b52f5a4-f12a-432c-b35c-696c46d54f70.jpeg\" alt=\"\" style=\"height: 1774.08px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/d6617f73-957e-4fd3-a1d9-36f5d015f2f4.jpeg\" alt=\"\" style=\"height: 2954.3px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/7fb39f6c-c232-493f-909e-418d8acbfd45.jpeg\" alt=\"\" style=\"height: 792.141px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/cd352ec8-e82f-427a-9109-e406dc2d72b3.jpeg\" alt=\"\" style=\"height: 1814.69px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/898fc5ee-7444-4e0b-8b28-2de8232bbeea.jpeg\" alt=\"\" style=\"height: 1471.95px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/ecd41715-b232-4b9b-a163-a4d1ecdc4cad.jpeg\" alt=\"\" style=\"height: 920.562px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/96d6b95f-f909-470e-8ec4-aac236519c59.jpeg\" alt=\"\" style=\"height: 994.312px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/96bd3a58-8ba1-494a-be90-d77fdf13ec4d.jpeg\" alt=\"\" style=\"height: 943.219px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/4fb7b624-f0fe-44f7-9edd-91dacd5812fb.jpeg\" alt=\"\" style=\"height: 1194.36px;width: 1133px\"/>\n<p style=\"text-align:start;\"></p>\n<p style=\"text-align:left;\"><br></p>\n\n<img src=\"https://archisketch-erp-shopping.s3.ap-northeast-2.amazonaws.com/prod/92534190-701d-4737-a090-48e0c5dd8392.jpeg\" alt=\"\" style=\"height: 3148.78px;width: 1133px\"/>\n<p style=\"text-align:start;\"><br></p>\n",
        "revert_policy": "\n<h4>교환 및 반품이 가능한 경우</h4>\n<ol>\n  <li>구매자 단순 변심은 상품 수령 후 7일 이내 (구매자 반품배송비 부담)</li>\n  <li>표시/광고와 상이, 상품하자의 경우 상품 수령 후 3개월 이내 혹은 표시/광고와 다른 사실을 안 날로부터 30일 이내 (판매자 반품배송비 부담)</li>\n  <ul>\n    <li>둘 중 하나 경과 시 반품/교환 불가</li>\n  </ul>\n</ol>\n\n<h4>교환 및 반품이 불가능한 경우</h4>\n<ul>\n  <li>반품요청기간이 지난 경우</li>\n  <li>구매자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우 (단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는 제외)</li>\n  <li>포장을 개봉하였으나 포장이 훼손되어 상품가치가 현저히 상실된 경우 (예: 식품, 화장품)</li>\n  <li>구매자의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우 (라벨이 떨어진 의류 또는 태그가 떨어진 명품관 상품인 경우)</li>\n  <li>시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우 (예: 식품, 화장품)</li>\n  <li>고객주문 확인 후 상품제작에 들어가는 주문제작상품</li>\n  <li>복제가 가능한 상품 등의 포장을 훼손한 경우 (CD/DVD/GAME/도서의 경우 포장 개봉 시)</li>\n</ul>"
    },
    "created_at": "Tue Feb 15 2022 18:06:00 GMT+0900 (Korean Standard Time)",
    "updated_at": "Thu Mar 03 2022 16:50:33 GMT+0900 (Korean Standard Time)",
    "opened_at": "Tue Feb 15 2022 17:26:43 GMT+0900 (Korean Standard Time)",
    "closed_at": null,
    "paused_at": null,
    "suspended_at": null
};