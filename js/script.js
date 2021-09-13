$(function () {
    //サムネールをクリック
    $("main a").click(function () {
        //main要素の最後にdiv#bgを追加
        $("main").append('<div id="bg">');

        //main要素の最後にdiv#photoを追加
        $("main").append('<div id="photo">');

        //それぞれ非表示にする
        $("#bg").hide();
        $("#photo").hide();

        //photoの中にimg要素を追加
        $("#photo").html("<img>");

        //img要素にsrc属性を設定
        $("#photo img").attr("src", $(this).attr("href"));

        //img要素にwidth,height,alt属性を設定
        $("#photo img").attr("alt", "photo");

        //#bgと#photoをフェードイン
        $("#bg").fadeIn();
        $("#photo").fadeIn();

        //背景をクリック
        $("#bg").click(function () {
            //背景（自分自身）をフェードアウト、完了したら削除
            $(this).fadeOut(function () {
                $(this).remove();
            });

            //画像をフェードアウト、完了したら削除
            $("#photo").fadeOut(function () {
                $(this).remove();
            });

        });

        return false;
    });
});