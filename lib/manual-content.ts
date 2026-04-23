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
          '左メニュー「予約／受付」から日付を選択し患者をクリック',
          '「特定健診受診券情報」をクリック',
          '11桁の整理番号と有効期限を入力',
          'トグルスイッチを「受付済」に変更',
        ],
        keywords: ['特定健診', '受付方法', '番号入力'],
      },
      {
        id: 2,
        title: '予約の登録',
        duration: '0:34',
        youtubeUrl: 'https://youtu.be/od2v-EbY3oc',
        steps: [
          '左メニュー「予約／受付」のカレンダーで「＋新規」をクリック',
          '対象者を選択',
          'コースを指定し「登録」をクリック',
        ],
        keywords: ['新規予約', '予約登録', '受診者検索'],
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
        keywords: ['予約変更', '日程変更', '予約修正'],
      },
      {
        id: 4,
        title: '当日の受付方法と検査項目の編集追加',
        duration: '0:41',
        youtubeUrl: 'https://youtu.be/DyC-xYv7cJw',
        steps: [
          '左メニュー「予約／受付」から日付を選択',
          '予約詳細を開きコース欄の「編集」をクリック',
          '項目を追加し「閉じる」をクリック',
          'トグルボタンを「受付済」に変更し「登録」',
        ],
        keywords: ['当日受付', '検査追加', '項目編集'],
        tips: 'デフォルトで選択済み、選択可能な検査項目は、健診情報管理＜コース管理＜検査項目で設定できます。',
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：受診券番号は何桁入力すればいい？',
        duration: '0:11',
        youtubeUrl: 'https://youtu.be/-MFztryrrb0',
        steps: [
          '受診券の「受診券整理番号」を確認',
          'システム上の「整理番号」欄に11桁の番号を入力',
        ],
        keywords: ['受診券番号', '11桁', '桁数'],
      },
      {
        id: 2,
        title: 'Q：カレンダー上部にある絞り込みはどのように使うのですか？',
        duration: '0:22',
        youtubeUrl: 'https://youtu.be/m8zA9MMUbE8',
        steps: [
          '左メニュー「予約／受付」の右上の「絞り込み」をクリック',
          '条件にチェックを入れ抽出',
        ],
        keywords: ['絞り込み', 'フィルター', '抽出'],
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
        youtubeUrl: 'https://youtu.be/ghTktOZ0ouc',
        steps: [
          '左メニュー「受診者管理」をクリック',
          '検索欄に氏名またはIDを入力',
          '「編集」をクリック',
          '（新規は）「新規受診者登録」から入力し「登録者を登録」をクリック',
        ],
        keywords: ['受診者検索', '編集', '新規登録'],
        warning: '2文字以上で検索可能です。',
      },
      {
        id: 2,
        title: '受診者の所属と保険団体を登録する',
        duration: '0:49',
        youtubeUrl: 'https://youtu.be/o040vW0ZvKc',
        steps: [
          '受診者情報の「所属設定」をクリック',
          '「団体追加」から所属先を検索・選択',
          '保険団体を追加し記号番号を入力',
          '「受診者を登録」をクリック',
        ],
        keywords: ['所属登録', '保険証', '紐付け'],
        warning: '受診者属性インポートをご利用の場合でも、こちらは必要な作業となります。',
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q IDって何？',
        duration: '0:13',
        youtubeUrl: 'https://youtu.be/XEVjHiFAhOU',
        steps: [
          '「ID」入力欄を確認',
          'カルテIDを入力するのが一般的であることを解説',
          '検索・連携のために推奨',
        ],
        keywords: ['IDとは', 'カルテID', '患者番号'],
      },
      {
        id: 2,
        title: 'Q：受診者の必須入力項目は何ですか？',
        duration: '0:18',
        youtubeUrl: 'https://youtu.be/6Z9L2WPZMUM',
        steps: [
          '受診者登録画面で「氏名」「生年月日」「性別」の3項目を入力する',
        ],
        keywords: ['必須項目', '氏名', '生年月日'],
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
          '左メニュー「予約／受付」で予約を確定させる',
          '詳細画面の「健診お知らせ」「質問票」「結果記入用紙」をクリックして出力',
        ],
        keywords: ['事前帳票', '質問票', '印刷'],
        tips: '問診票は事前送付用、結果記入用紙は受診当日用。',
      },
      {
        id: 2,
        title: '予約受付者名簿を出力する',
        duration: '0:42',
        youtubeUrl: 'https://youtu.be/3TxB-bnR_Gw',
        steps: [
          '左メニュー「帳票出力」をクリック',
          'メニューから「予約受付者名簿」を選択',
          '出力ボタンをクリック',
        ],
        keywords: ['名簿出力', '受付リスト', '帳票出力'],
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
          '左メニュー「結果入力」から対象者を選択',
          '身長、体重、血液検査等の数値を入力',
          '所見を入力',
          '右側の前回結果等を確認',
        ],
        keywords: ['結果入力', '数値入力', '所見'],
      },
      {
        id: 2,
        title: '自動判定',
        duration: '0:41',
        youtubeUrl: 'https://youtu.be/5AIjiSenrYg',
        steps: [
          '左メニュー「結果入力」から対象者を選択',
          '「自動判定」をクリック',
          '算出された判定を確認',
          '直接修正が必要な場合は入力',
          '「確定」をクリック',
        ],
        keywords: ['自動判定', '総合判定', '確定'],
      },
      {
        id: 3,
        title: '検査結果の報告書などの帳票の印刷',
        duration: '0:24',
        youtubeUrl: 'https://youtu.be/uEabDeZQy3U',
        steps: [
          '「結果入力」画面右上の「印刷出力」をクリック',
          '報告書書式を選択し「印刷」',
        ],
        keywords: ['報告書印刷', '印刷', '成績表'],
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：医師が「確定」ボタンを押す理由は？',
        duration: '0:13',
        youtubeUrl: 'https://youtu.be/M9nWcPxUKqY',
        steps: [
          '「確定」をクリックし結果の編集をロックするため',
        ],
        keywords: ['医師確定', 'ロック', '承認'],
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
          '左メニュー「問診入力」をクリック',
          '日付を選択し対象者をクリック',
          '質問票の該当ボタンをチェック',
          '「問診を登録」をクリック',
        ],
        keywords: ['問診入力', '質問回答', '回答登録'],
      },
    ],
    steps: [],
  },

  // OPTIONS
  import: {
    title: 'データインポート',
    url: 'manual_import',
    videos: [
      {
        id: 1,
        title: '結果インポート',
        duration: '0:28',
        youtubeUrl: 'https://youtu.be/nxRE43w_bw0',
        steps: [
          '左メニュー「データインポート」をクリックします',
          '「機関を選択」のドロップダウンから検査機関を選択します',
          'エリア内に検査結果ファイルをドラッグアンドドロップ、または「ファイル追加」から追加します',
          '「インポートを実行」をクリックします',
        ],
        keywords: ['結果インポート', 'データインポート', '検査機関', 'ファイル追加'],
        tips: '正常に取り込まれたデータは「結果入力画面」で確認できます。',
      },
    ],
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
          '左メニュー「データエクスポート」の「特定健診結果CSVのエクスポート」をクリック',
          '条件を指定し「エクスポート」をクリック',
        ],
        keywords: ['特定健診', 'CSV出力', 'エクスポート'],
      },
      {
        id: 2,
        title: '提出用ファイルの作成手順',
        duration: '0:22',
        youtubeUrl: 'https://youtu.be/6F313qtS-zQ',
        steps: [
          'デスクトップの「特定健診作成」をクリック',
          'ZIPを選択し「暗号化」をクリック',
          '「OK」をクリック',
        ],
        keywords: ['提出ファイル', '暗号化', 'ZIP作成'],
      },
      {
        id: 3,
        title: '【協会けんぽ】データ出力',
        duration: '0:31',
        youtubeUrl: 'https://youtu.be/EDVmznQpus8',
        steps: [
          '左メニュー「データエクスポート」をクリックします',
          '「協会けんぽCSVエクスポート」タブをクリックします',
          '「定義を選択」のドロップダウンを開き、出力するデータを選択します',
          '「適用期間」に出力する受診日を期間指定します',
          '「エクスポートを実行」ボタンをクリックします',
        ],
        keywords: ['協会けんぽ', 'データ出力', 'CSVエクスポート', '生活習慣病予防健診'],
        warning: '抽出できる期間は最大1か月です。',
      },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：出力したエクスポートデータはどこに保存される？',
        duration: '0:11',
        youtubeUrl: 'https://youtu.be/tyYp463VwJI',
        steps: [
          'エクスポートを実行',
          'デスクトップに自動で作成された「DAIDAエクスポートフォルダ」を確認',
        ],
        keywords: ['保存先', 'フォルダ', 'データ保存'],
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
          '左メニュー「健診情報管理」の「コース内容管理」をクリック',
          '「＋新規作成」をクリック',
          '名称を入力し用途を選択',
          '「コースグループを登録」をクリック',
        ],
        keywords: ['コース作成', '枠組み', '名称入力'],
      },
      {
        id: 2,
        title: 'コースを複製し、新しいコースを作成する',
        duration: '0:28',
        youtubeUrl: 'https://youtu.be/nEKKcOiidy8',
        steps: [
          '「健診情報管理」のコース一覧で「…」をクリック',
          '「参照複製」をクリック',
        ],
        keywords: ['コース複製', 'コピー', '参照複製'],
      },
      {
        id: 3,
        title: '複製したコースをカスタマイズする',
        duration: '0:45',
        youtubeUrl: 'https://youtu.be/j3m3QiBFD4w',
        steps: [
          '対象の「編集」をクリック',
          '名称を書き換え「構成内容」を設定',
          '「コースを登録」をクリック',
        ],
        keywords: ['カスタマイズ', '構成変更', '名称変更'],
      },
      {
        id: 4,
        title: '新コースの確定と有効化',
        duration: '0:34',
        youtubeUrl: 'https://youtu.be/y8cBYcyEkVU',
        steps: [
          '左メニュー「健診情報管理」の「詳細」をクリック',
          '「編集」をクリック',
          '「未確定／確定」トグルを確定に',
          '「有効／無効」トグルを有効に',
          '「コースグループを登録」をクリック',
        ],
        keywords: ['有効化', '確定', '予約反映'],
        tips: '新しくコースを作成した場合に、確定漏れがよくあるので、お忘れなく！',
      },
      {
        id: 5,
        title: '契約コースの紐付け',
        duration: '0:21',
        youtubeUrl: 'https://youtu.be/h1Sq2vzMxpU',
        steps: [
          '契約詳細下部の「契約コース」で「＋」をクリック',
          'コースを選択',
          '「契約コースを登録」をクリック',
        ],
        keywords: ['紐付け', 'コース追加', '契約コース'],
        tips: 'この設定が、予約時の受診可能コース表示に反映されます。',
      },
      {
        id: 6,
        title: '契約コースの基本単価を設定する',
        duration: '0:17',
        youtubeUrl: 'https://youtu.be/Fpvax7jIx-4',
        steps: [
          '契約詳細下部の「契約コース」で「編集」をクリック',
          '単価を入力',
          '「契約���ースを登録」をクリック',
        ],
        keywords: ['単価設定', '料金入力', '基本料金'],
      },
      {
        id: 7,
        title: 'Q: 検査項目ごとの料金を細かく設定するには？',
        duration: '0:35',
        youtubeUrl: 'https://youtu.be/AwptSQr7kZo',
        steps: [
          '左メニュー「健診情報管理」の「検査項����������を展開',
          '「詳細」＞「編集」をクリック',
          '単価を入力し「検査項目を登録」をクリック',
        ],
        keywords: ['単価入力', '項目詳細', '価格編集'],
        tips: '料金設定画面内の「検査機器」はカレンダー絞り込み時の「モダリティ」に反映箇所です。',
      },
      {
        id: 8,
        title: '団体情報登録',
        duration: '0:37',
        youtubeUrl: 'https://youtu.be/iKgiv_nC-fM',
        steps: [
          '左メニュー「マスター管理」の「団体管理」をクリック',
          '「新規団体登録」をクリック',
          '名称、区分を入力',
          '「団体を登録」ボタンをクリック',
        ],
        keywords: ['団体登録', '会社名', 'マスター登録'],
        tips: '健診の契約対象が、個人以外の場合を団体と表記しています（企業・保険組合・自治体など）。',
      },
      {
        id: 9,
        title: '団体情報の新規登録と所属団体の自動連携',
        duration: '0:53',
        youtubeUrl: 'https://youtu.be/AaYPUwQYNg0',
        steps: [
          '左メニュー「マスター管理」の「団体管理」をクリック',
          '「新規団体登録」をクリック',
          '名称、略称を入力',
          '保険者番号を入力',
          '代行機関を検索し選択',
          '「団体を登録」をクリック',
        ],
        keywords: ['団体登録', '保険者番号', '自動連携'],
      },
      {
        id: 10,
        title: '契約情報の登録',
        duration: '0:38',
        youtubeUrl: 'https://youtu.be/NQkLBVciJe4',
        steps: [
          '左メニュー「健診情報管理」の「契約情報管理」をクリック',
          '「＋新規登録」をクリック',
          '代行機関を選択',
          '「契約名称」を入力',
          '「開始日」を設定',
          '「契約情報を登録」をクリック',
        ],
        keywords: ['契約登録', '代行機関', '新規登録'],
      },
      {
        id: 11,
        title: '契約情報の登録・編集',
        duration: '1:02',
        youtubeUrl: 'https://youtu.be/b2AnFWTQcIA',
        steps: [
          '左メニュー「健診情報管理」の「契約情報管理」をクリック',
          '対象を選択し編集',
          '「契約情報を保存」をクリック',
        ],
        keywords: ['契約編集', '契約更新', '修正'],
      },
      {
        id: 12,
        title: '【協会けんぽ】保険団体の登録',
        duration: '0:35',
        youtubeUrl: 'https://youtu.be/_fnLR2legwE',
        steps: [
          '左メニュー「健康情報管理」の「団体管理」をクリック',
          '検索窓に「全国」等の団体の一部文字、または保険者番号を入力し検索します',
          '出力する保険団体を選択します',
          '「編集」ボタンをクリックします',
          '「ファイル出力対象」のプルダウンから「協会けんぽ」を選択します',
          '「団体を登録」ボタンをクリックします',
        ],
        keywords: ['保険団体登録', '協会けんぽ', 'ファイル出力対象', '団体管理'],
        tips: '団体区分の絞り込み（社保/国保など）を使うと早く見つけることが可能です。',
      },
      {
        id: 13,
        title: '【協会けんぽ】契約情報の設定',
        duration: '1:26',
        youtubeUrl: 'https://youtu.be/SG4df3xbPyA',
        steps: [
          '左メニュー「健診情報管理」の「契約情報管理」をクリック',
          '検索窓に団体名や保険者番号を入力し、対象カテゴリを選択します',
          '該当団体をクリックし「＋新規登録」をクリック',
          '「契約名称」を入力します',
          '契約開始日を入力します',
          '「健診種別」を選択します',
          '「出力時受診券」の自動チェックを無効にします',
          '「契約情報を登録」をクリック',
          '「＋契約コースを追加」をクリック',
          '該当する生活習慣病予防健診のコースを選択します',
          '「契約コースを登録」をクリック（※使用するコース分繰り返す）',
        ],
        keywords: ['契約情報設定', '健診種別', '出力時受診券', '協会けんぽ契約'],
        tips: '出力時受診券の自動チェック無効は、特定健診等で必要となる機能です。',
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
          '受診者の予約や契約形態に合わせて「個人向け」または「団体向け」を選択します',
        ],
        keywords: ['個人向け', '団体向け', '契約形態'],
      },
      {
        id: 3,
        title: 'Q：「標準検査」と「オプション」の違いはどこで決まる？',
        duration: '0:14',
        youtubeUrl: 'https://youtu.be/mrQwSdE6yp4',
        steps: [
          'コースの「構成内容」で受診対象と必須の両方にチェックがあるか確認',
        ],
        keywords: ['標準', 'オプション', '判別基準'],
        tips: 'コース編集時の、受診対象は「標準検査」、必須項目は初期チェックの有無です。',
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
          '左メニュー「健診情報管理」で確定済（青文字）か確認',
          '未確定なら「確定」トグルをオンにする',
        ],
        keywords: ['表示されない', '予約画面', '有効化'],
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
        duration: '0:25',
        youtubeUrl: 'https://www.youtube.com/watch?v=BGZ5ZTRQQL8',
        steps: [
          '左メニュー「システム設定」の「帳票設定」をクリック',
          '対象帳票を選び「保存」をクリック',
        ],
        keywords: ['カスタマイズ', 'フォーマット', '帳��設定'],
      },
      {
        id: 2,
        title: 'ログインアカウント作成',
        duration: '0:34',
        youtubeUrl: 'https://youtu.be/XKgNmqScFaU',
        steps: [
          '左メニュー「システム設定」の「ユ���ザ���情報管理」をクリック',
          '「＋新規ユーザー登録」をクリック',
          '氏名・アカウント情報を入力',
          '「登録」をクリック',
        ],
        keywords: ['ユーザー登録', 'アカウント作成', 'ID発行'],
      },
      {
        id: 3,
        title: 'ファイル出力情報管理',
        duration: '0:41',
        youtubeUrl: 'https://youtu.be/yTVs_UG7JZU',
        steps: [
          '左メニュー「マスター管理」の「ファイル出力情報管理」をクリック',
          '出力ファイル名のリストから、編集したい出力ファイルを選択します',
          '「編集」をクリックします',
          'ドラッグ＆ドロップで出力の順番を変更（並び替え）または無効化します',
          '「保存」をクリックします',
          '出力データの文字コードを選択します',
          '抽出したい期間をカレンダーから選択します',
          '「出力開始」をクリックします',
        ],
        keywords: ['ファイル出力', '並び替え', '文字コード', '抽出条件'],
        warning: '抽出できる期間は最大1か月です。',
      },
    ],
    faqVideos: [],
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
        youtubeUrl: 'https://youtu.be/W_8AMYS7qbA',
        steps: [
          'デスクトップのアイコンをダブルクリック',
          'ログインIDを入力',
          'パスワードを入力',
          '「ログイン」ボタンをクリック',
        ],
        keywords: ['起動', 'ログイン', 'ID', 'パスワード'],
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
        tips: '医師→健診結果の確定/確定解除、管理者→ログインユーザー追加/パスワード設定etc',
      },
      {
        id: 2,
        title: 'Q：アカウントがロックされた場合の解除方法は？',
        duration: '0:31',
        youtubeUrl: 'https://youtu.be/ZvGdPrjTJYk',
        steps: [
          '左メニュー「システム設定」の「ユーザー情報管理」をクリック',
          '対象ユーザーを選択',
          '「編集」をクリック',
          '「ログイン許可」のトグルスイッチを右にクリック',
          '「変更する」をクリック',
        ],
        keywords: ['ロック解除', 'ログイン許可', 'ユーザー編集'],
        warning: 'Daidaiログイン時のパスワードを3回間違えた場合にロックされます。',
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
