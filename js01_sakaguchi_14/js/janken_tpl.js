// グーを選択
$("#gu_btn").on("click", function () {
  //   rannsuu (0~2)
  var random = Math.floor(Math.random() * 3);
  //   if分岐処理
  var view = "";
  var juge = "";
  if (random == 0) {
    view = '<img src="img/gu.png" alt="グー" />';
    juge = "あいこ　　　　";
  } else if (random == 1) {
    view = '<img src="img/cho.png" alt="チョキ" />';
    juge = "あなたの勝ち！";
  } else if (random == 2) {
    view = '<img src="img/par.png" alt="パー" />';
    juge = "あなたの負け…";
  }
  //   表示処理
  $("#pc_te").html("コンピュータの手は⇒");
  $("#pc_hands").html(view);
  $("#judgment").html(juge);
});

// チョキを選択
$("#cho_btn").on("click", function () {
  //   rannsuu (0~2)
  var random = Math.floor(Math.random() * 3);
  //   if分岐処理
  var view = "";
  var juge = "";
  if (random == 0) {
    view = '<img src="img/gu.png" alt="グー" />';
    juge = "あなたの負け…";
  } else if (random == 1) {
    view = '<img src="img/cho.png" alt="チョキ" />';
    juge = "あいこ　　　　";
  } else if (random == 2) {
    view = '<img src="img/par.png" alt="パー" />';
    juge = "あなたの勝ち！";
  }
  //   表示処理
  $("#pc_te").html("コンピュータの手は⇒");
  $("#pc_hands").html(view);
  $("#judgment").html(juge);
});

// パーを選択
$("#par_btn").on("click", function () {
  //   rannsuu (0~2)
  var random = Math.floor(Math.random() * 3);
  //   if分岐処理
  var view = "";
  var juge = "";
  if (random == 0) {
    view = '<img src="img/gu.png" alt="グー" />';
    juge = "あなたの勝ち！";
  } else if (random == 1) {
    view = '<img src="img/cho.png" alt="チョキ" />';
    juge = "あなたの負け…";
  } else if (random == 2) {
    view = '<img src="img/par.png" alt="パー" />';
    juge = "あいこ　　　　";
  }
  //   表示処理
  $("#pc_te").html("コンピュータの手は⇒");
  $("#pc_hands").html(view);
  $("#judgment").html(juge);
});
