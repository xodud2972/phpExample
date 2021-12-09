$(document).ready(function() {
    $("#submit").click(function() {
        if ($("#firstname").val().length == 0) {
            alert("이름을 입력하세요.");
            $("#Name").focus();
            return false;
        }
        if ($("#lastname").val().length == 0) {
            alert("별명을 입력하세요.");
            $("#Email").focus();
            return false;
        }
        if ($("#Middlename").val().length == 0) {
            alert("성을 입력하세요.");
            $("#Phone").focus();
            return false;
        }
        if ($("#Address").val().length == 0) {
            alert("주소를 입력하세요.");
            $("#Message").focus();
            return false;
        }
        if ($("#Contact").val().length == 0) {
            alert("연락처를 입력하세요.");
            $("#Message").focus();
            return false;
        }
        if ($("#comment").val().length == 0) {
            alert("소개를 입력하세요.");
            $("#Message").focus();
            return false;
        }
    });
});



    attachFile = {
        idx:0,
        add:function(){ // 파일필드 추가
            var o = this;
            var idx = o.idx;
 
            var div = document.createElement('div');

            div.style.marginTop = '3px';

            div.id = 'file' + o.idx;

                var file = document.all ? document.createElement('<input name="files[]">') : document.createElement('input');
                file.type = 'file';
                file.name = 'files[]';
                file.size = '40';
                file.id = 'fileField' + o.idx;

            var btn = document.createElement('input');
                btn.type = 'button';
                btn.value = '파일삭제';
                btn.onclick = function(){o.del(idx)}
                btn.style.marginLeft = '5px';
    
                div.appendChild(file);
                div.appendChild(btn);
                document.getElementById('attachFileDiv').appendChild(div);
                o.idx++;
            
            
        },
        del:function(idx){ // 파일필드 삭제
            if(document.getElementById('fileField' + idx).value != '' && !confirm('삭제 하시겠습니까?')){
                return;
            }
            document.getElementById('attachFileDiv').removeChild(document.getElementById('file' + idx));
        }
    }
