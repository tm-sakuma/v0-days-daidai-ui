// Manual content data for each menu item

export interface VideoItem {
  id: number
  title: string
  duration: string
  youtubeUrl?: string
  steps?: string[]
  keywords?: string[]
  warning?: string
  tips?: string
}

export interface StepItem {
  title: string
  items: string[]
  note?: {
    type: 'warning' | 'tips'
    title: string
    content: string
  }
}

export interface ManualContent {
  title: string
  url?: string
  videos: VideoItem[]
  faqVideos?: VideoItem[]
  steps: StepItem[]
}

export const manualContents: Record<string, ManualContent> = {
  // FRONT OFFICE
  appointment: {
    title: '予約／受付',
    url: 'manual_appointment',
    videos: [
      {
        id: 1,
        title: '【特定健診限定】当日の受付方法',
        duration: '0:27',
        youtubeUrl: 'https://youtu.be/wBu9WVDdT6A',
        steps: [
          'カレンダーから希望日をクリックします',
          '患者名をクリックして詳細や編集画面を開きます',
          '「特定健診受診券情報」をクリックします',
          '受診券にある11桁の整理番号を入力します',
          '有効期限を入力します',
          'トグルスイッチを予約から受付済に変更します',
        ],
        keywords: ['特定健診受付', '受診券番号', '番号入力', '有効期限', '40歳以上', '健診窓口', '整理番号'],
      },
      {
        id: 2,
        title: '予約の登録',
        duration: '0:34',
        youtubeUrl: 'https://youtu.be/od2v-EbY3oc',
        steps: [
          'カレンダーで対象の日付をクリックし、「＋新規」ボタンをクリックします',
          '予約日を確認し、予約時間をプルダウンから選択します',
          '「受診者検索」ボタンをクリックします',
          '名前またはIDを入力します',
          '「選択」ボタンをクリックします',
          '「選択」をクリックしコースを選択します',
          '「登録」ボタンを押して予約完了です',
        ],
        keywords: ['新規予約', '予約入力', 'カレンダー登録', '予約フロー', '予約追加', '患者紐付け', '受付予約'],
      },
      {
        id: 3,
        title: '予約の変更',
        duration: '0:26',
        youtubeUrl: 'https://youtu.be/-3j_PdfZwb4',
        steps: [
          'カレンダー上で対象の予約を選択します',
          '「編集」ボタンをクリックします',
          '予約日や時間を選択し直し「更新」をクリックします',
        ],
        keywords: ['予約変更', '日程変更', '予約修正', '時間変更', 'キャンセル', '振替予約', '編集方法', '変更手順'],
      },
      {
        id: 4,
        title: '当日の受付方法と検査項目の編集追加',
        duration: '0:41',
        youtubeUrl: 'https://youtu.be/DyC-xYv7cJw',
        steps: [
          'カレンダーから受付日を選択します',
          '該当受診者の予約をクリックして詳細を表示します',
          '「コース」欄の編集ボタンをクリックして変更します',
          '既定のコースの検査項目の一覧が表示されますので、チェックを入れます',
          '「閉じる」ボタンをクリックします',
          '予約日の下にあるトグルボタンを受付済にして完了です',
        ],
        keywords: ['当日追加', 'オプション追加', '受付操作', '項目変更', '窓口対応', '受付フロー', '検査追加'],
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：受診券番号は何桁入力すればいい？',
        duration: '0:11',
        youtubeUrl: 'https://youtu.be/-MFztryrrb0',
        steps: [
          '「特定健康診査受診券」にある「受診券整理番号」を確認します',
          '11桁の受診券整理番号を入力します',
        ],
        keywords: ['桁数エラー', '受診券番号', '整理番号', '桁数不足', '文字数', '番号間違い', '特定健診番号'],
      },
      {
        id: 2,
        title: 'Q：カレンダー上部にある絞り込みはどのように使う？',
        duration: '0:22',
        youtubeUrl: 'https://youtu.be/m8zA9MMUbE8',
        steps: [
          '「絞り込み」ボタンをクリックします',
          '表示したい条件にチェックを入れ抽出します',
        ],
        keywords: ['フィルター', '表示切替', '検索条件', '絞り込み', '団体別表示', '抽出', '予約確認', '並び替え'],
      },
    ],
    steps: [],
  },
  patient: {
    title: '受診者管理',
    url: 'manual_patient',
    videos: [
      {
        id: 1,
        title: '受診者の検索・編集・登録',
        duration: '0:32',
        youtubeUrl: 'https://youtu.be/DmixknzFn1E',
        steps: [
          '「受診者管理」をクリックします',
          '「氏名またはID」を検索欄に入力します',
          'リストから対象者を選択し詳細を表示します',
          '「編集」をクリックします',
          '「新規受診者登録ボタン」をクリックして受診者を登録します',
          '必須項目を入力し「登録者を登録」をクリックします',
        ],
        keywords: ['受診者検索', '患者検索', '受診者マスター', '患者情報', '住所変更', '名前検索', '患者一覧'],
      },
      {
        id: 2,
        title: '受診者の所属と保険団体を登録する',
        duration: '0:49',
        youtubeUrl: 'https://youtu.be/o040vW0ZvKc',
        steps: [
          '受診者の編集画面で「所属設定」をクリックします',
          '「団体追加」をクリックします',
          '所属タブで検索バーに団体名を入力し選択します',
          '再度「団体追加」をクリックします',
          '社保/国保タブで保険団体名を検索し、選択します',
          '保険証の記号、番号、枝番、区分を選択します',
          '「受診者を登録」をクリックします',
        ],
        keywords: ['保険証登録', '記号番号', '枝番', '会社名設定', '被保険者', '所属紐付け', '団体設定', '属性管理'],
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：IDって何？',
        duration: '0:13',
        youtubeUrl: 'https://youtu.be/XEVjHiFAhOU',
        steps: [
          '電子カルテと連携する事業者が多いため、カルテIDを入れるのが一般的になっています',
          'IDを入れなくても登録自体はできますが、検索や連携のために推奨します',
        ],
        keywords: ['受診者ID', '患者ID', '識別子', '管理番号', 'ID連携', 'カルテ連携', 'IDとは'],
      },
      {
        id: 2,
        title: 'Q：受診者の必須入力項目は何ですか？',
        duration: '0:18',
        youtubeUrl: 'https://youtu.be/6Z9L2WPZMUM',
        steps: [
          '氏名、生年月日、性別の3項目を入力して登録します',
        ],
        keywords: ['登録必須', '最小項目', '未入力エラー', '必須項目', '受診者登録', 'バリデーション', '登録できない'],
      },
    ],
    steps: [],
  },

  // BACK OFFICE
  report: {
    title: '帳票出力',
    url: 'manual_report',
    videos: [
      {
        id: 1,
        title: '事前帳票（質問票等）の出力',
        duration: '0:22',
        youtubeUrl: 'https://youtu.be/05CF1KfXB6s',
        steps: [
          '予約を確定させると、表示されている3つの帳票が作成できます',
          '「健診お知らせ」「質問票」「結果記入用紙」のボタンから出力します',
        ],
        keywords: ['質問票印刷', '事前準備', '郵送準備', '書類出力', 'PDF生成', '健診お知らせ', '案内状', '一括印刷'],
      },
      {
        id: 2,
        title: '予約受付者名簿を出力する',
        duration: '0:42',
        youtubeUrl: 'https://youtu.be/3TxB-bnR_Gw',
        steps: [
          '「予約/受付」または「帳票出力」画面を開きます',
          '「予約受付者名簿」を選択し出力ボタンをクリックします',
        ],
        keywords: ['受付リスト', 'デイリー名簿', '予約状況一覧', '印刷', '準備リスト', '予約確認表', '名簿出力'],
      },
    ],
    steps: [],
  },

  // HEALTH EXAMINATION
  result: {
    title: '結果入力',
    url: 'manual_result',
    videos: [
      {
        id: 1,
        title: '結果入力',
        duration: '0:38',
        youtubeUrl: 'https://youtu.be/7ga2oYpdFZI',
        steps: [
          '「結果入力」画面を表示します',
          'カレンダーやIDで検索し対象者を選択します',
          '計測結果、血液検査結果、レントゲンなどの所見を入力します',
          '前回と前々回の結果が画面右側に表示されます',
        ],
        keywords: ['数値入力', '異常値', '検査結果', '実施記録', '血液データ', '尿検査', '入力方法', '前回値比較'],
      },
      {
        id: 2,
        title: '自動判定',
        duration: '0:41',
        youtubeUrl: 'https://youtu.be/5AIjiSenrYg',
        steps: [
          '「自動判定」をクリックします',
          '入力されたデータから自動で総合判定を作成します',
          '判定ランクを「日本人間ドック学会」の基準に準拠し表示します',
          '手動入力の場合は、ダブルクリックで直接入力も可能です',
        ],
        keywords: ['自動判定', 'ランク付け', '総合判定', 'コメント自動', '判定ロジック', 'アルゴリズム', '医師判定'],
      },
      {
        id: 3,
        title: '検査結果の報告書などの帳表の印刷',
        duration: '0:24',
        youtubeUrl: 'https://youtu.be/SPo9az7P3cc',
        steps: [
          '印刷出力ボタンをクリックします',
          'メニューから報告書の書式を選択します',
          '他の帳票も画面左上に印刷するボタンが表示されます',
        ],
        keywords: ['結果報告書', '印刷手順', '健診結果', '成績表', '出力方法', 'PDF保存', '報告書発行', '最終出力'],
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：医師が「確定」ボタンを押す理由は？',
        duration: '0:13',
        youtubeUrl: 'https://youtu.be/M9nWcPxUKqY',
        steps: [
          '医師アカウントで「確定」の操作をすることで結果の編集ができなくなります',
          '医師が最終確定した結果として記録されます',
        ],
        keywords: ['最終承認', 'ロック機能', '医師確定', '承認フロー', 'データ保護', '確定ボタン', '変更不可'],
      },
    ],
    steps: [],
  },
  questionnaire: {
    title: '問診入力',
    url: 'manual_questionnaire',
    videos: [
      {
        id: 1,
        title: '問診入力',
        duration: '0:25',
        youtubeUrl: 'https://youtu.be/0aQWCzOvM34',
        steps: [
          '「問診入力」をクリックします',
          'カレンダーアイコンをクリックし、検索したい日付を選びます',
          '検索結果から対象受診者をクリックします',
          '質問票の該当ボタンをチェックします',
          '画面上部の「問診を登録」ボタンを押し保存します',
        ],
        keywords: ['問診回答', 'チェック漏れ', '問診票入力', '実施入力', 'タブレット問診', '登録方法'],
      },
    ],
    steps: [],
  },

  // OPTIONS
  import: {
    title: 'データインポート',
    url: 'manual_import',
    videos: [],
    steps: [],
  },
  export: {
    title: 'データエクスポート',
    url: 'manual_export',
    videos: [
      {
        id: 1,
        title: '特定健診結果CSVのエクスポート',
        duration: '0:17',
        youtubeUrl: 'https://youtu.be/BFaf7s6Sjjw',
        steps: [
          '「特定健診結果CSVのエクスポート」画面を開きます',
          '条件を選択し「エクスポート」をクリックします',
        ],
        keywords: ['行政報告', 'データ抽出', '国保連', 'CSV出力', '報告データ', '特定健診', 'エクスポート'],
      },
      {
        id: 2,
        title: '提出用ファイルの作成手順',
        duration: '0:22',
        youtubeUrl: 'https://youtu.be/6F313qtS-zQ',
        steps: [
          'デスクトップ上の「特定健診作成アイコン」をクリックします',
          '圧縮ZIP形式のフォルダを選択し「開く」をクリックします',
          '「暗号化(Enter)」をクリックします',
          '完了メッセージが表示されるので「OK」をクリックします',
        ],
        keywords: ['暗号化', '提出ファイル', 'ZIP作成', '送信データ', 'オンライン請求', 'フォーマット変換'],
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：出力したエクスポートデータはどこに保存される？',
        duration: '0:11',
        youtubeUrl: 'https://youtu.be/tyYp463VwJI',
        steps: [
          'エクスポートを実行します',
          'デスクトップに自動で「DAIDAエクスポートフォルダ」が作成されます',
        ],
        keywords: ['保存場所', 'フォルダ確認', 'どこにある', 'ファイル見失った', '保存先設定', 'ダウンロード'],
      },
    ],
    steps: [],
  },

  // ADMINISTRATION
  'health-info': {
    title: '健診情報管理',
    url: 'manual_health_info',
    videos: [
      {
        id: 1,
        title: '新規コースの枠組み作成',
        duration: '0:24',
        youtubeUrl: 'https://youtu.be/Q9IppeZ3fJg',
        steps: [
          '「健診情報管理」の「コース管理」画面を開きます',
          '「コース内容管理」タブをクリックします',
          '「新規作成」ボタンをクリックし���す',
          '「内容名称」欄にコース名を入力します',
          '「コース用途」をプルダウンから選択します',
          '「コースグループを登録」をクリックして内容を保存します',
        ],
        keywords: ['コース作成', '枠組み作成', '新コース', '健診コース', '名称設定', '種類選択', '基本設定'],
      },
      {
        id: 2,
        title: 'コースを複製する',
        duration: '0:28',
        youtubeUrl: 'https://youtu.be/nEKKcOiidy8',
        steps: [
          '「コース」セクションを展開します',
          '対象コースの右側にある「…」をクリックします',
          '「参照複製」をクリックします',
        ],
        keywords: ['コピー機能', '時短設定', '複製', '同じコース', '横展開', '参照作成', '効率化', 'デュプリケート'],
      },
      {
        id: 3,
        title: '複製したコースをカスタマイズする',
        duration: '0:45',
        youtubeUrl: 'https://youtu.be/j3m3QiBFD4w',
        steps: [
          '複製したコースを選択し「編集」をクリックします',
          '名称、出力名、略称を新しい名称に変えましょう',
          '「構成内容」をクリックします',
          '項目グループ構成の内容を確認し、標準、オプションの設定をします',
          '「コースを登録」をクリックし、保存します',
        ],
        keywords: ['内容変更', '項目調整', 'コース編集', '特注コース', '構成変更', 'セット内容', '検査項目変更'],
      },
      {
        id: 4,
        title: '新コースの確定と有効化',
        duration: '0:34',
        youtubeUrl: 'https://youtu.be/y8cBYcyEkVU',
        steps: [
          '有効化したいコースの「詳細」をクリックします',
          '「編集」をクリックします',
          '「未確定／確定」トグルで、確定に切り替えます',
          '「有効／無効」トグルで、有効に切り替えます',
          '「コースグループを登録」ボタンで設定を保存します',
        ],
        keywords: ['有効化', '確定処理', '公開設定', '表示されない', 'ステータス変更', 'コース有効', '予約反映'],
      },
      {
        id: 5,
        title: '契約コースの紐付け',
        duration: '0:21',
        youtubeUrl: 'https://youtu.be/h1Sq2vzMxpU',
        steps: [
          '「契約コース」の「＋コース追加」をクリックします',
          'リストの中から該当のコースを選択します',
          '「契約コースを登録」ボタンをクリックします',
        ],
        keywords: ['コース連携', '紐付け', '利用コース', 'コース追加', '契約紐付け', 'コース選択', '団体コース'],
      },
      {
        id: 6,
        title: '契約コースの基本単価を設定する',
        duration: '0:17',
        youtubeUrl: 'https://youtu.be/Fpvax7jIx-4',
        steps: [
          '「編集」ボタンをクリックします',
          '「単価」欄を選択し、基本料金を入力します',
          '「契約コースを登録」ボタンをクリックし、確定させます',
        ],
        keywords: ['金額設定', '料金登録', '単価入力', '税区分', 'コース単価', '請求金額', '契約単価', '費用設定'],
      },
      {
        id: 7,
        title: 'Q: 検査項目ごとの料金を細かく設定するには？',
        duration: '0:35',
        youtubeUrl: 'https://youtu.be/AwptSQr7kZo',
        steps: [
          '「検査項目」を展開します',
          '該当する検査項目の「詳細」をクリックします',
          '画面右上の「編集」をクリックします',
          '「単価」欄に直接価格を入力・変更しましょう',
          '「検査項目を登録」をクリックして保存します',
        ],
        keywords: ['項目価格', '単価編集', '詳細設定', '検査料金', '基準コード', '検査マニュアル', 'デフォルト価格'],
      },
      {
        id: 8,
        title: '団体情報登録',
        duration: '0:37',
        youtubeUrl: 'https://youtu.be/iKgiv_nC-fM',
        steps: [
          '「新規団体登録」ボタンをクリックして新しい団体の登録を開始します',
          '団体の名称、団体区分を入力・選択します',
          '「団体を登録」ボタンを押して確定します',
        ],
        keywords: ['会社作成', '団体追加', 'マスター登録', '連絡先設定', '企業管理', '新規団体', '住所入力'],
      },
      {
        id: 9,
        title: '団体情報の新規登録と所属団体の自動連携',
        duration: '0:53',
        youtubeUrl: 'https://youtu.be/AaYPUwQYNg0',
        steps: [
          '「新規団体登録」ボタンを押し、新しい団体の登録手続きを開始します',
          '団体区分選択をプルダウンで選択します',
          '団体名称、略称を入力します',
          '保険者番号を入力します',
          '「代行機関」欄にキーワードを入力し、該当する代行機関を検索・選択します',
          '「団体を登録」をクリックします',
        ],
        keywords: ['団体登録', '保険者番号', '自動入力', '所属連携', '会社登録', '紐付け設定', '組織管理', '自動補完'],
      },
      {
        id: 10,
        title: '契約情報の登録',
        duration: '0:38',
        youtubeUrl: 'https://youtu.be/NQkLBVciJe4',
        steps: [
          '「新規登録」ボタンを押し、新しい契約情報の登録を開始します',
          '代行機関の選択欄をクリックして、該当する代行機関を選択します',
          '「契約名称」の欄に名称を入力してください',
          '契約の開始日をクリックして、有効期間を設定します',
          '「契約情報を登録」をクリックします',
        ],
        keywords: ['契約マニュアル', '請求先設定', '契約追加', '代行機関', '新規契約', '請求区分', '契約マスター'],
      },
      {
        id: 11,
        title: '契約情報の登録・編集',
        duration: '1:02',
        youtubeUrl: 'https://youtu.be/b2AnFWTQcIA',
        steps: [
          '契約管理画面から対象の団体を選択します',
          '「編集」ボタンをクリックします',
          '内容を変更し「契約情報を保存」をクリックします',
        ],
        keywords: ['期間変更', '契約更新', '内容修正', '有効期限', '契約メンテナンス', '編集方法', '契約変更'],
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：保険者番号が6桁しかない場合は？',
        duration: '0:09',
        youtubeUrl: 'https://youtu.be/xA5HNquRWxw',
        steps: [
          '保険者番号が6桁表示の場合は、頭に【00】をつけて8桁にします',
        ],
        keywords: ['8桁変換', '6桁保険者', '番号エラー', '桁数補完', '入力ルール', '登録できない', '桁数合わせ'],
      },
      {
        id: 2,
        title: 'Q：「個人向け」と「団体向け」どちらを選べばいい？',
        duration: '0:11',
        youtubeUrl: 'https://youtu.be/9CzJb9sYUj4',
        steps: [
          '受診者の予約や契約形態に合わせて個人または団体を選択します',
        ],
        keywords: ['個人団体', '区分選択', '請求切替', '自費健診', '会社健診', 'コース出ない', '判別方法'],
      },
      {
        id: 3,
        title: 'Q：「標準検査」と「オプション」の違いはどこで決まる？',
        duration: '0:14',
        youtubeUrl: 'https://youtu.be/mrQwSdE6yp4',
        steps: [
          '受診対象と必須の両方両方にチェックがついている項目は標準検査として登録されます',
          '両方のチェックがない項目はオプション検査として登録されます',
        ],
        keywords: ['判別基準', '必須項目', 'オプション設定', '標準項目', '違い', '見分け方', '設定ルール'],
      },
      {
        id: 4,
        title: 'Q：コース設定を一番早く終わらせる方法は？',
        duration: '0:14',
        youtubeUrl: 'https://youtu.be/M5Zs5WiF0HI',
        steps: [
          '参照複製で内容が似ているコースをコピーしてください',
          '複製されたコースの健診内容を編集するのが一番早いです',
        ],
        keywords: ['時短術', '効率化', '最短設定', '楽に設定', 'コツ', '参照複製活用', '爆速設定', '裏技'],
      },
      {
        id: 5,
        title: 'Q：作ったコースが予約画面に出てこない！',
        duration: '0:23',
        youtubeUrl: 'https://youtu.be/q9wPziUg698',
        steps: [
          '「コース内容管理」タブをクリックします',
          'コース内容管理で見ると、有効化されているコースは確定済と赤文字が出ています',
          '確定済みになっていない場合は、予約画面に出ません',
        ],
        keywords: ['表示エラー', '解決策', '予約に出ない', '公開設定ミス', '消えた', '適用期間', '原因調査'],
      },
    ],
    steps: [],
  },
  master: {
    title: 'マスター管理',
    url: 'manual_master',
    videos: [
      {
        id: 1,
        title: '帳票の出力フォーマットをカスタマイズする',
        duration: '0:32',
        youtubeUrl: 'https://youtu.be/BGZ5ZTRQQL8',
        steps: [
          '帳票設定画面で対象の帳票を選択します',
          '内容を編集し「保存」をクリックします',
        ],
        keywords: ['レイアウト変更', 'テンプレート', 'ロゴ設定', '文言変更', '帳票デザイン', 'フォーマット編集'],
      },
      {
        id: 2,
        title: 'ログインアカウント作成',
        duration: '0:34',
        youtubeUrl: 'https://youtu.be/XKgNmqScFaU',
        steps: [
          '「新規ユーザー登録」ボタンをクリックします',
          'ユーザー情報を入力します',
          '「登録」をクリックして保存します',
        ],
        keywords: ['アカウント作成', 'ユーザー追加', '職員登録', 'ID発行', '新規登録', '担当者設定', '権限追加', 'ユーザー設定'],
      },
    ],
    steps: [],
  },
  system: {
    title: 'システム設定',
    url: 'manual_system',
    videos: [
      {
        id: 1,
        title: 'システム起動とログイン手順',
        duration: '0:17',
        youtubeUrl: 'https://youtu.be/TSmF664C29I',
        steps: [
          'システムを起動します',
          'ログインIDを入力します',
          'パスワードを入力します',
          '「ログイン」ボタンをクリックします',
        ],
        keywords: ['ログイン', '起動', '立ち上げ', 'ログインできない', 'パスワード入力', '使い方', '入口', 'ログイン画面'],
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：医師と一般スタッフでアカウントを分けるには？',
        duration: '0:20',
        youtubeUrl: 'https://youtu.be/lbEtNj2G9WQ',
        steps: [
          'ユーザー情報の編集画面で「職種区分」を選択します',
          '職種に応じた権限を割り当て「保存」します',
        ],
        keywords: ['権限分け', 'ロール設定', '職種変更', '医師権限', '閲覧制限', 'スタッフ設定', '役割分担', 'アクセス権'],
      },
      {
        id: 2,
        title: 'Q：アカウントがロックされた場合の解除方法は？',
        duration: '0:31',
        youtubeUrl: 'https://youtu.be/ZvGdPrjTJYk',
        steps: [
          '管理者権限でログインしてロックを解除してください',
          '対象ユーザーをリストから選択し詳細情報を表示します',
          '「編集」ボタンをクリックします',
          '「ログイン許可」のトグルスイッチを右にクリックします',
          '「変更する」をクリックします',
        ],
        keywords: ['ロック解除', 'ログイン不可', '凍結', 'パスワード間違い', 'ログイン許可', 'ログインできない', '解放', 'ユーザー編集'],
      },
    ],
    steps: [],
  },
}

// Get content by menu item ID
export function getManualContent(itemId: string): ManualContent {
  return manualContents[itemId] || manualContents.import
}

// Item to Category mapping for URL-based navigation (deep linking)
const itemCategoryMap: Record<string, string> = {
  home: 'HOME',
  appointment: 'FRONT_OFFICE',
  patient: 'FRONT_OFFICE',
  report: 'BACK_OFFICE',
  result: 'HEALTH_EXAMINATION',
  questionnaire: 'HEALTH_EXAMINATION',
  import: 'OPTIONS',
  export: 'OPTIONS',
  'health-info': 'ADMINISTRATION',
  master: 'ADMINISTRATION',
  system: 'ADMINISTRATION',
}

// Get category by item ID for deep linking
export function getItemCategory(itemId: string): string {
  return itemCategoryMap[itemId] || 'HOME'
}

// Get all valid page IDs for validation
export function getValidPageIds(): string[] {
  return Object.keys(manualContents)
}

// Search result item
export interface SearchResult {
  categoryId: string
  categoryTitle: string
  video: VideoItem
  matchType: 'title' | 'keyword' | 'step'
}

// Search videos across all categories
export function searchVideos(query: string): SearchResult[] {
  if (!query.trim()) return []

  const normalizedQuery = query.toLowerCase()
  const results: SearchResult[] = []

  for (const [categoryId, content] of Object.entries(manualContents)) {
    const allVideos = [...content.videos, ...(content.faqVideos || [])]

    for (const video of allVideos) {
      let matched = false
      let matchType: 'title' | 'keyword' | 'step' = 'title'

      // Check title
      if (video.title.toLowerCase().includes(normalizedQuery)) {
        matched = true
        matchType = 'title'
      }

      // Check keywords
      if (!matched && video.keywords) {
        for (const keyword of video.keywords) {
          if (keyword.toLowerCase().includes(normalizedQuery)) {
            matched = true
            matchType = 'keyword'
            break
          }
        }
      }

      // Check steps
      if (!matched && video.steps) {
        for (const step of video.steps) {
          if (step.toLowerCase().includes(normalizedQuery)) {
            matched = true
            matchType = 'step'
            break
          }
        }
      }

      if (matched) {
        results.push({
          categoryId,
          categoryTitle: content.title,
          video,
          matchType,
        })
      }
    }
  }

  return results
}
