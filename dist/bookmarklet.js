javacript:(function(){var __spreadArray=this&&this.__spreadArray||function(c,e){for(var b=0,a=e.length,d=c.length;b<a;b++,d++)c[d]=e[b];return c},showOvertime=function(){var c=document.evaluate("//div[@class='htBlock-adjastableTableF_inner']/table/tbody/tr/td[@class='custom2 specific-align_right ']/p",document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),e=__spreadArray([],Array(c.snapshotLength)).map(function(b,a){return a}).reduce(function(b,a){var d,f,g;return(a=null===(g=null===(f=null===(d=c.snapshotItem(a))||void 0===d?void 0:d.firstChild)||void 0===f?void 0:f.parentElement)||void 0===g?void 0:g.innerText.split("."))&&2===a.length?b+60*Number(a[0])+Number(a[1]):b},0);alert("\u4eca\u6708\u306e\u6b8b\u696d\u6642\u9593\u306f "+(e/60|0)+"\u6642\u9593"+e%60+"\u5206 \u3067\u3059")};showOvertime();})();