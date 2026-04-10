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
        keywords: ['特定健診', '受付方法', '受診券番号', '整理番号', '有効期限'],
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
        keywords: ['予約登録', '新規予約', '受診者検索', 'コース選択'],
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
        keywords: ['予約変更', '日程変更', '予約修正', 'キャンセル'],
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
        keywords: ['当日受付', '検査追加', '項目編集', 'オプション', '受付済'],
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
        keywords: ['受診券番号', '桁数', '整理番号', '11桁'],
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
        keywords: ['絞り込み', 'フィルター', '予約検索', '抽出'],
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
        keywords: ['受診者検索', '編集', '新規登録', '患者情報'],
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
        keywords: ['所属登録', '保険団体', '記号番号', '枝番', '会社名'],
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
        keywords: ['ID', 'カルテID', '連携', '患者番号'],
      },
      {
        id: 2,
        title: 'Q：受診者の必須入力項目は何ですか？',
        duration: '0:18',
        youtubeUrl: 'https://youtu.be/6Z9L2WPZMUM',
        steps: [
          '氏名、生年月日、性別の3項目を入力して登録します',
        ],
        keywords: ['必須項目', '受診者登録', '氏名', '生年月日', '性別'],
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
        keywords: ['事前帳票', '質問票', '健診お知らせ', '結果記入用紙', '印刷'],
      },
      {
        id: 2,
        title: '予約受付者名簿を出力す���',
        duration: '0:42',
        youtubeUrl: 'https://youtu.be/3TxB-bnR_Gw',
        steps: [
          '「予約/受付」または「帳票出力」画面を開きます',
          '「予約受付者名簿」を選択し出力ボタンをクリックします',
        ],
        keywords: ['名簿出力', '受付リスト', '予約者名簿'],
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
        keywords: ['結果入力', '数値入力', '検査結果', '前回値'],
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
        keywords: ['自動判定', '総合判定', '学会基準', '判定ランク'],
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
        keywords: ['報告書', '印刷', '帳票出力', '検査結果'],
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
        keywords: ['医師確定', '承認', 'ロック', '最終判定'],
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
        keywords: ['問診入力', '質問票', '22項目', '回答登録'],
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
        keywords: ['特定健診', 'CSV', 'エクスポート', 'データ出力'],
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
        keywords: ['提出用ファイル', '暗号化', 'ZIP作成', 'データ作成'],
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
        keywords: ['保存先', '保存場所', 'デスクトップ', 'フォルダ'],
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
        keywords: ['コース作成', '内容名称', 'コース用途', '健診情報管理'],
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
        keywords: ['複製', 'コピー', '参照複製', 'コース作成'],
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
          '「コースを登録」をク��ックし、保存します',
        ],
        keywords: ['カスタマイズ', 'コース編集', '構成内容', '名称変更'],
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
        keywords: ['確定', '有効化', 'コース登録', '予約反映'],
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
        keywords: ['紐付け', 'コース追加', '契約コース'],
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
        keywords: ['単価', '料金', '基本単価', '契約コース'],
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
        keywords: ['検査項目', '単価', '価格', '検査料金', '詳細編集'],
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
        keywords: ['団体登録', '団体名称', '団体区分', '新規団体'],
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
        keywords: ['団体登録', '保険者番号', '代行機関', '自動連携', '所属団体'],
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
        keywords: ['契約登録', '代行機関', '契約名称', '有効期間'],
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
        keywords: ['契約編集', '団体検索', '内容変更'],
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
        keywords: ['保険者番号', '6桁', '8桁', '桁数不足'],
      },
      {
        id: 2,
        title: 'Q：「個人向け」と「団体向け」どちらを選べばいい？',
        duration: '0:11',
        youtubeUrl: 'https://youtu.be/9CzJb9sYUj4',
        steps: [
          '受診者の予約や契約形態に合わせて個人または団体を選択します',
        ],
        keywords: ['個人向け', '団体向け', '契約形態', '予約'],
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
        keywords: ['標準検査', 'オプション', '受診対象', '必須チェック'],
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
        keywords: ['時短', '効率化', '参照複製', 'コピー'],
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
        keywords: ['表示されない', '予約画面', '確定済', '有効化'],
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
        keywords: ['帳票設定', 'フォーマット', 'カスタマイズ'],
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
        keywords: ['ユーザー登録', 'アカウント作成', '職員登録', '新規登録'],
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
        keywords: ['起動', 'ログイン', 'ID', 'パスワ���ド'],
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
        keywords: ['職種区分', '権限', '医師', 'スタッフ', 'アカウント'],
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
        keywords: ['ロック解除', 'ログイン許可', 'ユーザー編集', 'ログインできない'],
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

// Get all videos with their category info
export interface VideoWithCategory {
  categoryId: string
  categoryTitle: string
  video: VideoItem
}

export function getAllVideos(): VideoWithCategory[] {
  const allVideos: VideoWithCategory[] = []

  for (const [categoryId, content] of Object.entries(manualContents)) {
    const videos = [...content.videos, ...(content.faqVideos || [])]
    for (const video of videos) {
      allVideos.push({
        categoryId,
        categoryTitle: content.title,
        video,
      })
    }
  }

  return allVideos
}

// Get recent videos (last N added)
export function getRecentVideos(count: number = 3): VideoWithCategory[] {
  const allVideos = getAllVideos()
  // Return last N videos (most recently defined in the content)
  return allVideos.slice(-count).reverse()
}

// Get popular videos (fixed selection from different categories)
export function getPopularVideos(count: number = 4): VideoWithCategory[] {
  const allVideos = getAllVideos()
  // Return first N videos from the beginning (deterministic order)
  return allVideos.slice(0, count)
}
