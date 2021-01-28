export default {
	"routes": [
		{
			"menu_title": "message.marketSummary",
			"menu_icon": "zmdi zmdi-view-dashboard",
			"active": false,
			"child_routes": [
				{
					"path": "/summary/international",
					"menu_title": "message.international"
				},
				{
					"route_name": "summary-local",
					"path": "/summary/local",
					"menu_title": "message.local"
				}
			]
		},
		{
			"menu_title": "message.tradingValue",
			"menu_icon": "zmdi zmdi-star-circle",
			"active": false,
			"child_routes": [
				{
					"route_name": "trading-tfex",
					"path": "/trading/set",
					"menu_title": "message.set"
				},
				{
					"route_name": "summary-local",
					"path": "/trading/tfex",
					"menu_title": "message.tfex"
				}
			]
		},
		{
			"menu_title": "message.marketBreadth",
			"menu_icon": "zmdi zmdi-mouse",
			"active": false,
			"child_routes": [
				{
					"route_name": "breadth-members",
					"path": "/breadth/members",
					"menu_title": "message.members"
				},
				{
					"route_name": "breadth-membersMa100",
					"path": "/breadth/membersMa100",
					"menu_title": "message.membersMa100"
				}
			]
		},
		{
			"menu_title": "message.rrg",
			"menu_icon": "zmdi zmdi-view-web",
			"active": false,
			"child_routes": [
				{
					"route_name": "rrg-set",
					"path": "/rrg/set",
					"menu_title": "message.set"
				},
				{
					"route_name": "rrg-industry",
					"path": "/rrg/industry",
					"menu_title": "message.industry"
				},
				{
					"route_name": "rrg-sector",
					"path": "/rrg/sector",
					"menu_title": "message.sector"
				}
			]
		},
		{
			"menu_title": "message.technicalScreener",
			"menu_icon": "zmdi zmdi-shape",
			"active": false,
			"child_routes": [
				{
					"route_name": "technical-set",
					"path": "/technical/set",
					"menu_title": "message.set"
				},
				{
					"route_name": "technical-mai",
					"path": "/technical/mai",
					"menu_title": "message.mai"
				},
			]
		},
		{
			"menu_title": "message.strength",
			"menu_icon": "zmdi zmdi-case",
			"active": false,
			"child_routes": [
				{
					"route_name": "strength-set",
					"path": "/strength/set",
					"menu_title": "message.set"
				},
				{
					"route_name": "strength-mai",
					"path": "/strength/mai",
					"menu_title": "message.mai"
				},
			],
		},
		{
			"menu_title": "message.technicalChart",
			"menu_icon": "zmdi zmdi-dns",
			"active": false,
			"child_routes": [
				{
					"route_name": "technical-chart-trading",
					"path": "/technical-chart/trading",
					"menu_title": "message.tradingView"
				},
			],
		},
		/*{
			"menu_title": "message.dashboard",
			"menu_icon": "zmdi zmdi-view-dashboard",
			"active": false,
			"child_routes": [
				{
					"path": "/dashboard/dashboard-v1",
					"menu_title": "message.dashboard1"
				},
				{
					"route_name": "dashboard-v2",
					"path": "/dashboard/dashboard-v2",
					"menu_title": "message.dashboard2"
				},
				{
					"route_name": "crm",
					"path": "/dashboard/crm",
					"menu_title": "message.crm"
				},
				{
					"route_name": "crypto",
					"path": "/dashboard/crypto",
					"menu_title": "message.crypto"
				}
			]
		},
		{
			"menu_title": "message.crm",
			"menu_icon": "zmdi zmdi-accounts-alt",
			"active": false,
			"child_routes": [
				{
					"route_name": "projects",
					"path": "/crm/projects",
					"menu_title": "message.projects"
				},
				{
					"route_name": "projectDetails",
					"path": "/crm/projectDetails/01",
					"menu_title": "message.projectDetails"
				},
				{
					"route_name": "reports",
					"path": "/crm/reports",
					"menu_title": "message.reports"
				},
				{
					"route_name": "clients",
					"path": "/crm/clients",
					"menu_title": "message.clients"
				}
			]
		},
		{
			"menu_title": "message.crypto",
			"menu_icon": "zmdi zmdi-accounts-alt",
			"active": false,
			"child_routes": [
				{
					"route_name": "market-cap",
					"path": "/crypto/market-cap",
					"menu_title": "message.marketCap"
				},
				{
					"route_name": "wallet",
					"path": "/crypto/wallet",
					"menu_title": "message.wallet"
				},
				{
					"route_name": "trade",
					"path": "/crypto/trade",
					"menu_title": "message.trade"
				}
			]
		},
		
		{
			"menu_title": "message.uiElements",
			"menu_icon": "zmdi zmdi-view-carousel",
			"active": false,
			"child_routes": [
				{
					"path": "/ui-elements/alerts",
					"menu_title": "message.alerts"
				},
				{
					"path": "/ui-elements/buttons",
					"menu_title": "message.buttons"
				},
				{
					"path": "/ui-elements/progress-bar",
					"menu_title": "message.progressBar"
				},
				{
					"path": "/ui-elements/tabs",
					"menu_title": "message.tabs"
				},
				{
					"path": "/ui-elements/accordions",
					"menu_title": "message.accordions"
				},
				{
					"path": "/ui-elements/pagination",
					"menu_title": "message.pagination"
				},
				{
					"path": "/ui-elements/tooltip",
					"menu_title": "message.tooltip"
				},
				{
					"path": "/ui-elements/badges",
					"menu_title": "message.badges"
				},
				{
					"path": "/ui-elements/cards",
					"menu_title": "message.cards"
				},
				{
					"path": "/ui-elements/carousel",
					"menu_title": "message.carousel"
				}
			]
		},
		{
			"menu_title": "message.editor",
			"menu_icon": "zmdi zmdi-edit",
			"active": false,
			"child_routes": [
				{
					"path": "/editor/quill-editor",
					"menu_title": "message.quillEditor"
				},
				{
					"path": "/editor/wysiwyg",
					"menu_title": "message.wysiwyg"
				}
			]
		},
		{
			"menu_title": "message.dragAndDrop",
			"menu_icon": "zmdi zmdi-mouse",
			"active": false,
			"child_routes": [
				{
					"path": "/drag-drop/vuedraggable",
					"menu_title": "message.vueDraggable"
				},
				{
					"path": "/drag-drop/vue2-dragula",
					"menu_title": "message.vue2Dragula"
				},
				{
					"path": "/drag-drop/draggable-resizable",
					"menu_title": "message.draggableResizable"
				}
			]
		},
		{
			"menu_title": "message.icons",
			"menu_icon": "zmdi zmdi-star-circle",
			"active": false,
			"child_routes": [
				{
					"path": "/icons/themify",
					"menu_title": "message.themify"
				},
				{
					"path": "/icons/material",
					"menu_title": "message.material"
				},
				{
					"path": "/icons/font-awesome",
					"menu_title": "message.fontAwesome"
				}
			]
		},
		{
			"menu_title": "message.charts",
			"menu_icon": "zmdi zmdi-chart-donut",
			"active": false,
			"child_routes": [
				{
					"path": "/charts/vue-chartjs",
					"menu_title": "message.vueChartjs"
				},
				{
					"path": "/charts/vue-echarts",
					"menu_title": "message.vueEcharts"
				}
			]
		},
		{
			"menu_title": "message.tables",
			"menu_icon": "zmdi zmdi-view-quilt",
			"active": false,
			"child_routes": [
				{
					"path": "/tables/basic",
					"menu_title": "message.basic"
				},
				{
					"path": "/tables/responsive",
					"menu_title": "message.responsive"
				}
			]
		},
		{
			"menu_title": "message.maps",
			"menu_icon": "zmdi zmdi-map",
			"active": false,
			"child_routes": [
				{
					"path": "/maps/google-maps",
					"menu_title": "message.googleMaps"
				},
				{
					"path": "/maps/leaflet-maps",
					"menu_title": "message.leafletMaps"
				}
			]
		},
		{
			"menu_title": "message.pages",
			"menu_icon": "zmdi zmdi-collection-item",
			"active": false,
			"child_routes": [
				{
					"path": "/pages/gallery",
					"menu_title": "message.gallery"
				},
				{
					"path": "/pages/pricing",
					"menu_title": "message.pricing"
				},
				{
					"path": "/pages/blank",
					"menu_title": "message.blank"
				}
			]
		},
		{
			"menu_title": "message.users",
			"menu_icon": "zmdi zmdi-accounts",
			"active": false,
			"child_routes": [
				{
					"path": "/users/user-profile",
					"menu_title": "message.userProfile"
				},
				{
					"path": "/users/users-list",
					"menu_title": "message.usersList"
				}
			]
		},
		{
			"menu_title": "message.session",
			"menu_icon": "zmdi zmdi-time-countdown",
			"active": false,
			"child_routes": [
				{
					"path": "/session/login",
					"menu_title": "message.login"
				},
				{
					"path": "/session/sign-up",
					"menu_title": "message.signUp"
				},
				{
					"path": "/session/lock-screen",
					"menu_title": "message.lockScreen"
				},
				{
					"path": "/session/forgot-password",
					"menu_title": "message.forgotPassword"
				}
			]
		},
		{
			"menu_title": "message.features",
			"menu_icon": "zmdi zmdi-view-web",
			"active": false,
			"child_routes": [
				{
					"path": "/features/image-cropper",
					"menu_title": "message.imageCropper"
				},
				{
					"path": "/features/video-player",
					"menu_title": "message.videoPlayer"
				},
				{
					"path": "/features/dropzone",
					"menu_title": "message.dropzone"
				}
			]
		}*/
	]
}


