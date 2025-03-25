(function() {

	var EBWS_oWebSocket;
	var EBWS_sWebSocketUrl = "";
	var EBWS_bDebug = false;
	var EBWS_sAccessUrl = "/wbConnect";

	this.EventBrokerWebsocket = function() {

		var isJsonString = function(str) {
			var parsedString = false;
			try {
				parsedString = JSON.parse(str);
			} catch (e) {
				return false;
			}
			return parsedString;
		};

		var setUserData = function(jsonData) {
			if (jsonData != null && jsonData["SESSION_ID"] != null) {
				if (jsonData["SESSION_ID"] != "") {
					if (jsonData["SUCCESS"] == "true" && jsonData["ACTION_TYPE"] == "CONNECT_EVENT_BROKER") {
						var oldIframe = document.getElementById("iframe-wrapper");
						if (oldIframe != null) {
							oldIframe.outerHTML = "";
							delete oldIframe;
						}

						var sWebserverUrl = (EBWS_sWebSocketUrl != null ? EBWS_sWebSocketUrl.replace("ws://", "") : "");
						if (sWebserverUrl != "") {
							var ifrm = document.createElement("IFRAME");
							ifrm.setAttribute("src", "http://" + sWebserverUrl + "/setUserData?SESSION_ID=" + jsonData["SESSION_ID"]);
							ifrm.style.display = 'none';
							ifrm.setAttribute("id", "iframe-wrapper");
							document.body.appendChild(ifrm);
						}
					}
				}
			}
		};

		var closeSocket = function() {
			if (EBWS_oWebSocket !== undefined) {
				if (EBWS_bDebug) {
					console.log("Connection closed");
				}
				EBWS_oWebSocket.close();
			}
		};

		this.checkWebSocketSupport = function() {
			if (!"WebSocket" in window) {
				alert("WebSocket NOT supported by your Browser!");
				return false;
			} else {
				if (EBWS_bDebug) {
					console.log("Websocket supported.");
				}
				return true;
			}
		};

		this.initWebSocket = function(callBackFunction) {
			if (EBWS_oWebSocket !== undefined && EBWS_oWebSocket.readyState !== WebSocket.CLOSED) {
				if (EBWS_bDebug) {
					console.log("WebSocket is already opened.");
				}
				return;
			}
			if (EBWS_sWebSocketUrl == undefined || EBWS_sWebSocketUrl == "") {
				if (EBWS_bDebug) {
					console.log("WebSocket URL is not set.");
				}
				return;
			}

			try {
				EBWS_oWebSocket = new WebSocket(EBWS_sWebSocketUrl + EBWS_sAccessUrl);
			} catch (e) {
				console.log(e);
			}

			if (EBWS_oWebSocket !== undefined) {
				EBWS_oWebSocket.onerror = function(error) {
					if (EBWS_bDebug) {
						console.log(error);
					}
					alert("Connection to WebSocket failed!");
				};

				EBWS_oWebSocket.onopen = function(event) {

					var objectVal = {};
					objectVal["ACTION"] = "CONNECT_EVENT_BROKER";
					this.send(JSON.stringify(objectVal));

					if (event.data === undefined) {
						return;
					}
					var parsedJson = isJsonString(event.data);
					var jsonData = null;
					if (event.data !== undefined && parsedJson !== false) {
						jsonData = parsedJson;
					}
					if (EBWS_bDebug) {
						console.log(jsonData["MESSAGE"]);
					}
				};

				EBWS_oWebSocket.onmessage = function(event) {
					var parsedJson = isJsonString(event.data);
					var jsonData;
					if (event.data !== undefined && parsedJson !== false) {
						jsonData = parsedJson;
					}
					if (jsonData != null) {
						// setUserData(jsonData);
						if (EBWS_bDebug) {
							console.log(jsonData);
						}
						if (callBackFunction && typeof (callBackFunction) === "function") {
							callBackFunction(jsonData);
						}
					}
				};

				EBWS_oWebSocket.onclose = function(event) {
					closeSocket();
				};
			}
		};

		this.erbAddRegister = function(sGubunKey, sEventKey) {
			var objectVal = {};
			objectVal["ACTION"] = "ERB_ADD_REGISTER";
			objectVal["GUBUN_KEY"] = sGubunKey;
			objectVal["EVENT_KEY"] = sEventKey;

			if (EBWS_bDebug) {
				console.log(objectVal);
			}
			EBWS_oWebSocket.send(JSON.stringify(objectVal));
		};

		this.erbDeleteRegister = function(sGubunKey, sEventKey) {
			var objectVal = {};
			objectVal["ACTION"] = "ERB_DELETE_REGISTER";
			objectVal["GUBUN_KEY"] = sGubunKey;
			objectVal["EVENT_KEY"] = sEventKey;

			if (EBWS_bDebug) {
				console.log(objectVal);
			}
			EBWS_oWebSocket.send(JSON.stringify(objectVal));
		};

		this.erbRemoveAllRegister = function() {
			var objectVal = {};
			objectVal["ACTION"] = "ERB_REMOVE_ALL_REGISTER";

			if (EBWS_bDebug) {
				console.log(objectVal);
			}
			EBWS_oWebSocket.send(JSON.stringify(objectVal));
		};

		this.closeConnection = function() {
			var objectVal = {};
			objectVal["ACTION"] = "DISCONNECT_EVENT_BROKER";

			if (EBWS_bDebug) {
				console.log(objectVal);
			}
			EBWS_oWebSocket.send(JSON.stringify(objectVal));
		};

		this.setWebSocketUrl = function(sUrl) {
			EBWS_sWebSocketUrl = ("" != sUrl ? sUrl : "");
		};

		this.setGubunKey = function(sGKey) {
			EBWS_sGubunKey = ("" != sGKey ? sGKey : "");
		};

		this.setEventKey = function(sEKey) {
			EBWS_sEventKey = ("" != sEKey ? sEKey : "");
		};

		this.setDebug = function(bDebug) {
			EBWS_bDebug = ("" != bDebug ? true : false);
		};

		this.setAccessUrl = function(sAccessUrl) {
			EBWS_sAccessUrl = ("" != sAccessUrl ? sAccessUrl : EBWS_sAccessUrl);
		};
	};

	window.onbeforeunload = function() {
		if (EBWS_oWebSocket !== undefined) {
			EBWS_oWebSocket.close();
		}
	};
})();