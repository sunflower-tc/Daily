var Event = {
    // ҳ�������ɺ�
    readyEvent : function  (fn) {
        if (fn == null) {
            fn = document;
        }
        var oldonload = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = fn ;
        }else{
            window.onload = function  () {
                oldonload();
                fn();
            }
        };
    },
    //����¼�
    addEvent : function(element, type, hander) {
        if (element.addEventListener) {        //��IE
            //�¼����͡���Ҫִ�еĺ������Ƿ�׽
            element.addEventListener(type, hander, false);
        }else if(element.attachEvent){        //IE
            element.attachEvent('on' + type,function  () {
                hander.call(element);
            })
        }else{
            element['on' +type] = hander;
        };
    },
    //�Ƴ��¼�
    removeEvent : function  (element, type, hander) {
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false)
        }else if (element.attachEvent) {
            element.attachEvent('on' + type, hander);
        }else{
            element['on' + type] = null;
        };
    },
    //��ֹ�¼�
    stopPropagation : function  (event) {
        if (event.stopPropagation) {
            event.stopPropagation();    //W3C��׼
        }else{
            event.canceBubble = true;   //IE
        };
    },
    //ȡ��Ĭ���¼�
    preventDefault : function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        };
    },
    //��ȡ�¼�Ŀ��
    getTarget : function (event) {
        return event.target|event.srcElement;
    },
    //��ȡevent��������ã�ȡ���¼���������Ϣ��ȷ����ʱ��ʹ��event��
    getEvent:function (event) {
        var event = event || window.event;
        if (!event) {
            var c = this.getEvent.caller;
            while(!c){
                event = c.arguments[0];
                if (event && Event == ev.constructor) {
                    break;
                };
                c = c.caller;
            }
        };
        return event;
    }
}