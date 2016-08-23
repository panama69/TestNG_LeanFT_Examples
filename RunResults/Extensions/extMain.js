(function () {
	var nodeTypes = {
		suite: 'Suite',
		testContainer: 'TestContainer'
	};
	var isNodeTypeSupport = function (nodeType) {
		for (var p in nodeTypes) {
			if (nodeTypes[p] === nodeType)
				return true;
		}
	};

	var getNodeType =  function (context) {
		return __reportExtension.utils.fromDetailData.getReportNodeType(context.detailData);
	};

	__reportExtension.addExternalRender('RKey:TestFlowTree.Node.Visibility', {
		// preCheck callback
		preCheck: function (context, args) {
			var nodeType = __reportExtension.utils.fromDetailData.getReportNodeType(context.detailData);
			if (isNodeTypeSupport(nodeType))
				args.needExec = true;
		},

		// execute callback
		execute: function (context, args) {
			context.show_node = true;
		}
	});

	__reportExtension.addExternalRender('RKey:DetailsPane.Caption', {
		preCheck: function (context, args) {
			if (isNodeTypeSupport(getNodeType(context)))
				args.needExec = true;
		},

		// execute callback
		execute: function (context, args) {
			var nodeType = getNodeType(context);
			var caption = '<span class=my-ext-details-caption>' + nodeType.split(/(?=[A-Z])/).join(" ") + ' Details</span>';
			new DetailsPaneCaptionRenderer(caption).render(context.parent);
		}
	});

	__reportExtension.addExternalRender('RKey:DetailsPane.Section.Overview.Caption', {
		preCheck: function (context, args) {
			if (isNodeTypeSupport(getNodeType(context)))
				args.needExec = true;
		},

		// execute callback
		execute: function (context, args) {
			var nodeType = getNodeType(context);
			var caption = '<span class="cust-caption-detail">'+ nodeType.split(/(?=[A-Z])/).join(" ") + '</span>';
			new DetailsOverviewSectionCaptionRenderer(caption).render(context.parent);
		}
	});


	__reportExtension.addExternalRender('RKey:TestFlowTree.Node.Caption.Icon', {
		// preCheck callback
		preCheck: function (context, args) {
			var nodeType = __reportExtension.utils.fromReportNode.getReportNodeType(context.reportNode);
			if (nodeType === nodeTypes.suite || nodeType === nodeTypes.testContainer)
				args.needExec = true;
		},

		// execute callback
		execute: function (context, args) {
			var nodeType = __reportExtension.utils.fromReportNode.getReportNodeType(context.reportNode);
			switch(nodeType) {
				case nodeTypes.suite:
					context.icon_key = 'my-node-suite-icon';
					context.icon_tooltip = context.icon_tooltip;
					break;
				case nodeTypes.testContainer:
					context.icon_key = 'my-node-test-container-icon';
					context.icon_tooltip = 'Test Container(\"' + context.reportNode.Data.Name + '\")';
					break;
			}
		}
	});
})();


// SIG // Begin signature block
// SIG // MIIdhgYJKoZIhvcNAQcCoIIddzCCHXMCAQExCzAJBgUr
// SIG // DgMCGgUAMGcGCisGAQQBgjcCAQSgWTBXMDIGCisGAQQB
// SIG // gjcCAR4wJAIBAQQQEODJBs441BGiowAQS9NQkAIBAAIB
// SIG // AAIBAAIBAAIBADAhMAkGBSsOAwIaBQAEFDhOF6CUcbuk
// SIG // g8K6cYKkz7yApx/7oIIYtjCCA+4wggNXoAMCAQICEH6T
// SIG // 6/t8xk5Z6kuad9QG/DswDQYJKoZIhvcNAQEFBQAwgYsx
// SIG // CzAJBgNVBAYTAlpBMRUwEwYDVQQIEwxXZXN0ZXJuIENh
// SIG // cGUxFDASBgNVBAcTC0R1cmJhbnZpbGxlMQ8wDQYDVQQK
// SIG // EwZUaGF3dGUxHTAbBgNVBAsTFFRoYXd0ZSBDZXJ0aWZp
// SIG // Y2F0aW9uMR8wHQYDVQQDExZUaGF3dGUgVGltZXN0YW1w
// SIG // aW5nIENBMB4XDTEyMTIyMTAwMDAwMFoXDTIwMTIzMDIz
// SIG // NTk1OVowXjELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMTAwLgYDVQQDEydTeW1h
// SIG // bnRlYyBUaW1lIFN0YW1waW5nIFNlcnZpY2VzIENBIC0g
// SIG // RzIwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
// SIG // AQCxrLNJVEuXHBIK2CV5kSJXKm/cuCbEQ3Nrwr8uUFr7
// SIG // FMJ2jkMBJUO0oeJF9Oi3e8N0zCLXtJQAAvdN7b+0t0Qk
// SIG // a81fRTvRRM5DEnMXgotptCvLmR6schsmTXEfsTHd+1Fh
// SIG // AlOmqvVJLAV4RaUvic7nmef+jOJXPz3GktxK+Hsz5HkK
// SIG // +/B1iEGc/8UDUZmq12yfk2mHZSmDhcJgFMTIyTsU2sCB
// SIG // 8B8NdN6SIqvK9/t0fCfm90obf6fDni2uiuqm5qonFn1h
// SIG // 95hxEbziUKFL5V365Q6nLJ+qZSDT2JboyHylTkhE/xni
// SIG // RAeSC9dohIBdanhkRc1gRn5UwRN8xXnxycFxAgMBAAGj
// SIG // gfowgfcwHQYDVR0OBBYEFF+a9W5czMx0mtTdfe8/2+xM
// SIG // gC7dMDIGCCsGAQUFBwEBBCYwJDAiBggrBgEFBQcwAYYW
// SIG // aHR0cDovL29jc3AudGhhd3RlLmNvbTASBgNVHRMBAf8E
// SIG // CDAGAQH/AgEAMD8GA1UdHwQ4MDYwNKAyoDCGLmh0dHA6
// SIG // Ly9jcmwudGhhd3RlLmNvbS9UaGF3dGVUaW1lc3RhbXBp
// SIG // bmdDQS5jcmwwEwYDVR0lBAwwCgYIKwYBBQUHAwgwDgYD
// SIG // VR0PAQH/BAQDAgEGMCgGA1UdEQQhMB+kHTAbMRkwFwYD
// SIG // VQQDExBUaW1lU3RhbXAtMjA0OC0xMA0GCSqGSIb3DQEB
// SIG // BQUAA4GBAAMJm495739ZMKrvaLX64wkdu0+CBl03X6ZS
// SIG // nxaN6hySCURu9W3rWHww6PlpjSNzCxJvR6muORH4KrGb
// SIG // sBrDjutZlgCtzgxNstAxpghcKnr84nodV0yoZRjpeUBi
// SIG // JZZux8c3aoMhCI5B6t3ZVz8dd0mHKhYGXqY4aiISo1EZ
// SIG // g362MIIEozCCA4ugAwIBAgIQDs/0OMj+vzVuBNhqmBsa
// SIG // UDANBgkqhkiG9w0BAQUFADBeMQswCQYDVQQGEwJVUzEd
// SIG // MBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xMDAu
// SIG // BgNVBAMTJ1N5bWFudGVjIFRpbWUgU3RhbXBpbmcgU2Vy
// SIG // dmljZXMgQ0EgLSBHMjAeFw0xMjEwMTgwMDAwMDBaFw0y
// SIG // MDEyMjkyMzU5NTlaMGIxCzAJBgNVBAYTAlVTMR0wGwYD
// SIG // VQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjE0MDIGA1UE
// SIG // AxMrU3ltYW50ZWMgVGltZSBTdGFtcGluZyBTZXJ2aWNl
// SIG // cyBTaWduZXIgLSBHNDCCASIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggEPADCCAQoCggEBAKJjCzlEuLsjp0RJuw7/ofBhClOT
// SIG // sJjbrSwPSsVu/4Y8U1UPFc4EPyv9qZaW2b5heQtbyUyG
// SIG // duXgQ0sile7CK0PBn9hotI5AT+6FOLkRxSPyZFjwFTJv
// SIG // TlehroikAtcqHs1L4d1j1ReJMluwXplaqJ0oUA4X7pbb
// SIG // YTtFUR3PElYLkkf8q672Zj1HrHBy55LnX80QucSDZJQZ
// SIG // vSWA4ejSIqXQugJ6oXeTW2XD7hd0vEGGKtwITIySjJEt
// SIG // nndEH2jWqHR32w5bMotWizO92WPISZ06xcXqMwvS8aMb
// SIG // 9Iu+2bNXizveBKd6IrIkri7HcMW+ToMmCPsLvalPmQjh
// SIG // EChyqs0CAwEAAaOCAVcwggFTMAwGA1UdEwEB/wQCMAAw
// SIG // FgYDVR0lAQH/BAwwCgYIKwYBBQUHAwgwDgYDVR0PAQH/
// SIG // BAQDAgeAMHMGCCsGAQUFBwEBBGcwZTAqBggrBgEFBQcw
// SIG // AYYeaHR0cDovL3RzLW9jc3Aud3Muc3ltYW50ZWMuY29t
// SIG // MDcGCCsGAQUFBzAChitodHRwOi8vdHMtYWlhLndzLnN5
// SIG // bWFudGVjLmNvbS90c3MtY2EtZzIuY2VyMDwGA1UdHwQ1
// SIG // MDMwMaAvoC2GK2h0dHA6Ly90cy1jcmwud3Muc3ltYW50
// SIG // ZWMuY29tL3Rzcy1jYS1nMi5jcmwwKAYDVR0RBCEwH6Qd
// SIG // MBsxGTAXBgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTIwHQYD
// SIG // VR0OBBYEFEbGaaMOShQe1UzaUmMXP142vA3mMB8GA1Ud
// SIG // IwQYMBaAFF+a9W5czMx0mtTdfe8/2+xMgC7dMA0GCSqG
// SIG // SIb3DQEBBQUAA4IBAQB4O7SRKgBM8I9iMDd4o4QnB28Y
// SIG // st4l3KDUlAOqhk4ln5pAAxzdzuN5yyFoBtq2MrRtv/Qs
// SIG // JmMz5ElkbQ3mw2cO9wWkNWx8iRbG6bLfsundIMZxD82V
// SIG // dNy2XN69Nx9DeOZ4tc0oBCCjqvFLxIgpkQ6A0RH83Vx2
// SIG // bk9eDkVGQW4NsOo4mrE62glxEPwcebSAe6xp9P2ctgwW
// SIG // K/F/Wwk9m1viFsoTgW0ALjgNqCmPLOGy9FqpAa8VnCwv
// SIG // SRvbIrvD/niUUcOGsYKIXfA9tFGheTMrLnu53CAJE3Hr
// SIG // ahlbz+ilMFcsiUk/uc9/yb8+ImhjU5q9aXSsxR08f5Lg
// SIG // w7wc2AR1MIIFHjCCBAagAwIBAgIQQTnRy3KPFNE9KaYy
// SIG // mhrpPDANBgkqhkiG9w0BAQsFADB/MQswCQYDVQQGEwJV
// SIG // UzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24x
// SIG // HzAdBgNVBAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsx
// SIG // MDAuBgNVBAMTJ1N5bWFudGVjIENsYXNzIDMgU0hBMjU2
// SIG // IENvZGUgU2lnbmluZyBDQTAeFw0xNjAzMjIwMDAwMDBa
// SIG // Fw0xNzAzMjMyMzU5NTlaMIGkMQswCQYDVQQGEwJVUzET
// SIG // MBEGA1UECAwKQ2FsaWZvcm5pYTESMBAGA1UEBwwJUGFs
// SIG // byBBbHRvMSswKQYDVQQKDCJIZXdsZXR0IFBhY2thcmQg
// SIG // RW50ZXJwcmlzZSBDb21wYW55MRIwEAYDVQQLDAlDb2Rl
// SIG // IFNpZ24xKzApBgNVBAMMIkhld2xldHQgUGFja2FyZCBF
// SIG // bnRlcnByaXNlIENvbXBhbnkwggEiMA0GCSqGSIb3DQEB
// SIG // AQUAA4IBDwAwggEKAoIBAQDBoAF2XDbrxfDMxAUPXWgP
// SIG // utBvu+uuziBtvo2EDzYwq3H5o/tf7TQfzUTwVALiE0Ap
// SIG // hDWpuCO4ph0B+y4NjopTQA5ZHU4NrEMr2If7yCoi3iit
// SIG // b4BTsF7qnBuy7OsbC3SRYbDLKv+3ElyXVjTefMIo+uQN
// SIG // KlzN/7sHBFbmsidFxyrDiaBVUA9VTQUtmOuG3AFVF74F
// SIG // p5lWx/5j+t7O6XYyqDXlTpycvGsVQcg0Zu+TPN7jkKoS
// SIG // 4RoQcZiZ1nU5tbJeyw63N4GavHT0wA0lMBrZF2Ou74GT
// SIG // uAZC8R83pWLtjjFKEPCZRQ3dLrMcCrHsoNGVooRVLpgt
// SIG // JAs7r9H6taoVAgMBAAGjggFuMIIBajAJBgNVHRMEAjAA
// SIG // MA4GA1UdDwEB/wQEAwIHgDATBgNVHSUEDDAKBggrBgEF
// SIG // BQcDAzBmBgNVHSAEXzBdMFsGC2CGSAGG+EUBBxcDMEww
// SIG // IwYIKwYBBQUHAgEWF2h0dHBzOi8vZC5zeW1jYi5jb20v
// SIG // Y3BzMCUGCCsGAQUFBwICMBkaF2h0dHBzOi8vZC5zeW1j
// SIG // Yi5jb20vcnBhMB8GA1UdIwQYMBaAFJY7U/B5M5evfYPv
// SIG // LivMyreGHnJmMCsGA1UdHwQkMCIwIKAeoByGGmh0dHA6
// SIG // Ly9zdi5zeW1jYi5jb20vc3YuY3JsMFcGCCsGAQUFBwEB
// SIG // BEswSTAfBggrBgEFBQcwAYYTaHR0cDovL3N2LnN5bWNk
// SIG // LmNvbTAmBggrBgEFBQcwAoYaaHR0cDovL3N2LnN5bWNi
// SIG // LmNvbS9zdi5jcnQwEQYJYIZIAYb4QgEBBAQDAgQQMBYG
// SIG // CisGAQQBgjcCARsECDAGAQEAAQH/MA0GCSqGSIb3DQEB
// SIG // CwUAA4IBAQCFW7G9ZUH30GeEcuiJFzSNf5kiLHDOVOL6
// SIG // LK0sDqLt58qaNkB6ZQtAaFHEpWr4QEPHAOZMJcTeB/s2
// SIG // +25wdpa78QiIw09v/rsFgy29WdxgVfw53sq+rkihPWlI
// SIG // yhO0ub+1mmy3Aj49b9f6esDZD0ft3M7vN/ZiW7lTkfKJ
// SIG // E1sI2Y2YLPaJphPud3xNXMXas8/oQ/g7pG6LN/j3WGml
// SIG // QNv5R6BVlZY9QfaIoAbL9WW2oAbhFbRdX2/LmPLQ1p3e
// SIG // EAyhO73KudrZvS+18wd0iMnPlE1IuQRAl6al7AB4UPUq
// SIG // OX6yr1rBC2zrLf5Tg88zExpTpclukd5nPcyC7dpuVXYO
// SIG // MIIFWTCCBEGgAwIBAgIQPXjX+XZJYLJhffTwHsqGKjAN
// SIG // BgkqhkiG9w0BAQsFADCByjELMAkGA1UEBhMCVVMxFzAV
// SIG // BgNVBAoTDlZlcmlTaWduLCBJbmMuMR8wHQYDVQQLExZW
// SIG // ZXJpU2lnbiBUcnVzdCBOZXR3b3JrMTowOAYDVQQLEzEo
// SIG // YykgMjAwNiBWZXJpU2lnbiwgSW5jLiAtIEZvciBhdXRo
// SIG // b3JpemVkIHVzZSBvbmx5MUUwQwYDVQQDEzxWZXJpU2ln
// SIG // biBDbGFzcyAzIFB1YmxpYyBQcmltYXJ5IENlcnRpZmlj
// SIG // YXRpb24gQXV0aG9yaXR5IC0gRzUwHhcNMTMxMjEwMDAw
// SIG // MDAwWhcNMjMxMjA5MjM1OTU5WjB/MQswCQYDVQQGEwJV
// SIG // UzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24x
// SIG // HzAdBgNVBAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsx
// SIG // MDAuBgNVBAMTJ1N5bWFudGVjIENsYXNzIDMgU0hBMjU2
// SIG // IENvZGUgU2lnbmluZyBDQTCCASIwDQYJKoZIhvcNAQEB
// SIG // BQADggEPADCCAQoCggEBAJeDHgAWryyx0gjE12iTUWAe
// SIG // cfbiR7TbWE0jYmq0v1obUfejDRh3aLvYNqsvIVDanvPn
// SIG // XydOC8KXyAlwk6naXA1OpA2RoLTsFM6RclQuzqPbROlS
// SIG // Gz9BPMpK5KrA6DmrU8wh0MzPf5vmwsxYaoIV7j02zxzF
// SIG // lwckjvF7vjEtPW7ctZlCn0thlV8ccO4XfduL5WGJeMdo
// SIG // G68ReBqYrsRVR1PZszLWoQ5GQMWXkorRU6eZW4U1V9Pq
// SIG // k2JhIArHMHckEU1ig7a6e2iCMe5lyt/51Y2yNdyMK29q
// SIG // clxghJzyDJRewFZSAEjM0/ilfd4v1xPkOKiE1Ua4E4bC
// SIG // G53qWjjdm9sCAwEAAaOCAYMwggF/MC8GCCsGAQUFBwEB
// SIG // BCMwITAfBggrBgEFBQcwAYYTaHR0cDovL3MyLnN5bWNi
// SIG // LmNvbTASBgNVHRMBAf8ECDAGAQH/AgEAMGwGA1UdIARl
// SIG // MGMwYQYLYIZIAYb4RQEHFwMwUjAmBggrBgEFBQcCARYa
// SIG // aHR0cDovL3d3dy5zeW1hdXRoLmNvbS9jcHMwKAYIKwYB
// SIG // BQUHAgIwHBoaaHR0cDovL3d3dy5zeW1hdXRoLmNvbS9y
// SIG // cGEwMAYDVR0fBCkwJzAloCOgIYYfaHR0cDovL3MxLnN5
// SIG // bWNiLmNvbS9wY2EzLWc1LmNybDAdBgNVHSUEFjAUBggr
// SIG // BgEFBQcDAgYIKwYBBQUHAwMwDgYDVR0PAQH/BAQDAgEG
// SIG // MCkGA1UdEQQiMCCkHjAcMRowGAYDVQQDExFTeW1hbnRl
// SIG // Y1BLSS0xLTU2NzAdBgNVHQ4EFgQUljtT8Hkzl699g+8u
// SIG // K8zKt4YecmYwHwYDVR0jBBgwFoAUf9Nlp8Ld7LvwMAnz
// SIG // Qzn6Aq8zMTMwDQYJKoZIhvcNAQELBQADggEBABOFGh5p
// SIG // qTf3oL2kr34dYVP+nYxeDKZ1HngXI9397BoDVTn7cZXH
// SIG // ZVqnjjDSRFph23Bv2iEFwi5zuknx0ZP+XcnNXgPgiZ4/
// SIG // dB7X9ziLqdbPuzUvM1ioklbRyE07guZ5hBb8KLCxR/Md
// SIG // oj7uh9mmf6RWpT+thC4p3ny8qKqjPQQB6rqTog5QIikX
// SIG // TIfkOhFf1qQliZsFay+0yQFMJ3sLrBkFIqBgFT/ayftN
// SIG // TI/7cmd3/SeUx7o1DohJ/o39KK9KEr0Ns5cF3kQMFfo2
// SIG // KwPcwVAB8aERXRTl4r0nS1S+K4ReD6bDdAUK75fDiSKx
// SIG // H3fzvc1D1PFMqT+1i4SvZPLQFCEwggWaMIIDgqADAgEC
// SIG // AgphGZPkAAAAAAAcMA0GCSqGSIb3DQEBBQUAMH8xCzAJ
// SIG // BgNVBAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAw
// SIG // DgYDVQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3Nv
// SIG // ZnQgQ29ycG9yYXRpb24xKTAnBgNVBAMTIE1pY3Jvc29m
// SIG // dCBDb2RlIFZlcmlmaWNhdGlvbiBSb290MB4XDTExMDIy
// SIG // MjE5MjUxN1oXDTIxMDIyMjE5MzUxN1owgcoxCzAJBgNV
// SIG // BAYTAlVTMRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5jLjEf
// SIG // MB0GA1UECxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29yazE6
// SIG // MDgGA1UECxMxKGMpIDIwMDYgVmVyaVNpZ24sIEluYy4g
// SIG // LSBGb3IgYXV0aG9yaXplZCB1c2Ugb25seTFFMEMGA1UE
// SIG // AxM8VmVyaVNpZ24gQ2xhc3MgMyBQdWJsaWMgUHJpbWFy
// SIG // eSBDZXJ0aWZpY2F0aW9uIEF1dGhvcml0eSAtIEc1MIIB
// SIG // IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAryQI
// SIG // CCl6NZ5gDKrnSztO3Hy8PEUcuyvg/ikC+VcIo2SFFSf1
// SIG // 8a3IMYldIugqqqZCs4/4uVW3sbdLs/6PfgdX7O9D22Zi
// SIG // FWHPYA2k2N744MNiCD1UE+tJyllUhSblK48bn+v1oZHC
// SIG // M0nYQ2NqUkvSj+hwUU3RiWl7x3D2s9wSdNt7XUtW05a/
// SIG // FXehsPSiJfKvHJJnGOX0BgTvkLnkAOTdOrUZ/wK69Dzu
// SIG // 4IvrN4vs9Nes8vbwPa/ddZEzGR0cQMt0JBkhk9kU/qwq
// SIG // UseP1QRJ5I1jR4g8aYPL/ke9K35PxZWuDp3U0UPAZ3Pj
// SIG // FAh+5T+fc7gzCs9dPzSHloruU+glFQIDAQABo4HLMIHI
// SIG // MBEGA1UdIAQKMAgwBgYEVR0gADAPBgNVHRMBAf8EBTAD
// SIG // AQH/MAsGA1UdDwQEAwIBhjAdBgNVHQ4EFgQUf9Nlp8Ld
// SIG // 7LvwMAnzQzn6Aq8zMTMwHwYDVR0jBBgwFoAUYvsKIVt/
// SIG // Q24R2glUUGv10pZx8Z4wVQYDVR0fBE4wTDBKoEigRoZE
// SIG // aHR0cDovL2NybC5taWNyb3NvZnQuY29tL3BraS9jcmwv
// SIG // cHJvZHVjdHMvTWljcm9zb2Z0Q29kZVZlcmlmUm9vdC5j
// SIG // cmwwDQYJKoZIhvcNAQEFBQADggIBAIEqghaMNGcr5QPr
// SIG // NHuMoqNQivRVhvEejI6ufe4DGc5ylRhIrWIR/SD9P0cG
// SIG // AVri4G+MFSxOPGpQbAs2o896DZxCvFz4GdVg42nm4iNB
// SIG // Z4xog3Yrj5OjKrV/vln7qcmyJo/KovOCG5g+kZUnl4Zh
// SIG // 7ltdB2vNhqjiZYCo4hXisr4jBWq6DPNHk02spIwHeTnA
// SIG // YRI6BQ2Jo+yfV4mE++zKfEdmFJHYtg8ZXea4Sqy8R8hx
// SIG // Q5bmMiCl3HeG/Tzji3Hbe5sD/LcdMmTrFlKgQ6P6Lq1Z
// SIG // kk58x/IzQkg4UTp8OMcbJCIoQB4aRh8X2xj38Cc1bLhj
// SIG // 2c25ZF0rpV7vxim08sf4IcwEulf9Abarxmf559OZf/T1
// SIG // Ivpy9f3/OhxCOqH5gBil7o0c1GaeRQH+qu7/+xePMPfx
// SIG // zSnFney11UkAPYW4y7uTOidqScAwrmbJ9yMoMnb5pINW
// SIG // yEjOWpaqoMwMxH+0jpevbeNUJ8OfhsDW5HMIlwXb0FRi
// SIG // XgNIwtWff6dmjNCdsE/U05hfS3rJf7IpUtASgMcPVLYe
// SIG // Z83GoGwRA4TTSHXnKv6wO24KOqZrdpkFo/F3aGEzFEcG
// SIG // /FN/Ur2SFFxKJGpnjK+NkKrQ9nkhG5MmfMPOHr2IOJKu
// SIG // RcYZaklQswX4rlk3imolA5SxWYFQ6LqDgLcjNfR2uWcd
// SIG // WRitII2UMYIEPDCCBDgCAQEwgZMwfzELMAkGA1UEBhMC
// SIG // VVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9u
// SIG // MR8wHQYDVQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3Jr
// SIG // MTAwLgYDVQQDEydTeW1hbnRlYyBDbGFzcyAzIFNIQTI1
// SIG // NiBDb2RlIFNpZ25pbmcgQ0ECEEE50ctyjxTRPSmmMpoa
// SIG // 6TwwCQYFKw4DAhoFAKBwMBAGCisGAQQBgjcCAQwxAjAA
// SIG // MBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisG
// SIG // AQQBgjcCAQsxDjAMBgorBgEEAYI3AgEVMCMGCSqGSIb3
// SIG // DQEJBDEWBBR1im30Ip4Orv35iz7Dq9fHhF0TajANBgkq
// SIG // hkiG9w0BAQEFAASCAQBmEFnmUUZbc5r5smBlFgaQwXHN
// SIG // WqbYjcGm0++dBz6mfsoF5H4qD7fQeyY22X3P7k+ohyxR
// SIG // 9AaIs3AdD1f4zJZzic3twEg6Yg6W082Amwjh+jEk4gY1
// SIG // lTvqjO40n7BLbrnz1HUSjIZySKoquEuxu8gMxhRVERwm
// SIG // kQ7UxyXYojV7GZcTtcFhOR42Dogq4nxJ82suguZ8Fsnw
// SIG // hrjSPWbQkl5HAtT6OpuIHnayqJeVTAgc/UqMw0Y0DvBM
// SIG // 5LqQgPBRXG1VpFaagWZpEKKlXf+a42UUsDyo4z/QVAAo
// SIG // PQooFEyb+nogBMuTNTyOXIWudFyEXpKBnxqiB3r3O0J5
// SIG // EgjOri26oYICCzCCAgcGCSqGSIb3DQEJBjGCAfgwggH0
// SIG // AgEBMHIwXjELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5
// SIG // bWFudGVjIENvcnBvcmF0aW9uMTAwLgYDVQQDEydTeW1h
// SIG // bnRlYyBUaW1lIFN0YW1waW5nIFNlcnZpY2VzIENBIC0g
// SIG // RzICEA7P9DjI/r81bgTYapgbGlAwCQYFKw4DAhoFAKBd
// SIG // MBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZI
// SIG // hvcNAQkFMQ8XDTE2MDUyMTAxNTY0M1owIwYJKoZIhvcN
// SIG // AQkEMRYEFB8R5cnTqYaBcgDY7liE4Y3DKIvNMA0GCSqG
// SIG // SIb3DQEBAQUABIIBAFW9imgPPjfIQM0gi1Ss8+VRW8f3
// SIG // zB/EL8ghiqBgV3Latykcougjookw2iYsmzK7RlpHeeMr
// SIG // C0v2mnz4JDLRDzAZ87WWrz4If9OarvP0po6MpQrwraOY
// SIG // Skib32lUCUpzQ2sSwKKkWfKoCETBs3wP9OP5z4+K8P/V
// SIG // tcyWjRySqJns6xDG6xZa7PRDrsEcDQgc3/o0o0J85Hlf
// SIG // bqmJn87ock9SHacMQx6y2/k9olu+DOmZhxqpnqPmWdgt
// SIG // 4vje88I6iovQQElHbCcKzuQK4s5DGV3j2KUM0e6Z+Vc3
// SIG // o4CVi3M5+BR7Gb8dPg6oddEhJ+SCRQoQXpDDUd9LQNhy
// SIG // eVLwIuA=
// SIG // End signature block
