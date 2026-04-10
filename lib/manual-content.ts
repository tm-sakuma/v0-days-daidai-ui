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
          '予約詳細の下部にある「特定健診受診券情報」セクションを開く',
          '手元の受診券を見ながら、11桁の整理番号と有効期限を入力',
          '情報を確認後、「受付済」トグルをオンにして保存',
        ],
        keywords: ['特定健診受付', '受診券番号', '番号入力', '有効期限', '40歳以上', '健診窓口', '整理番号'],
      },
    ],
    faqVideos: [],
    steps: [],
  },
  patient: {
    title: '受診者管理',
    url: 'manual_patient',
    videos: [
      { id: 1, title: '受診者の検索と新規登録', duration: '2:30' },
      { id: 2, title: '受診者情報の登録手順（特定健診用）', duration: '3:00' },
      { id: 3, title: '受診者の所属・保険団体設定', duration: '2:45' },
    ],
    faqVideos: [
      { id: 1, title: 'Q: 受診者の必須入力項目は何ですか？', duration: '2:00' },
      { id: 2, title: 'Q: 特定健診で住所入力が必須な理由は？', duration: '2:15' },
    ],
    steps: [
      {
        title: '受診者を検索する',
        items: [
          '検索バーに氏名・ID・生年月日を入力',
          '検索結果から該当者を選択',
          '詳細画面で情報を確認',
        ],
        note: { type: 'tips', title: 'Tips', content: 'カナ検索、部分一致検索にも対応しています。' },
      },
      {
        title: '新規受診者を登録する',
        items: [
          '「新規登録」ボタンをクリック',
          '基本情報（氏名、生年月日、性別）を入力',
          '連絡先情報を入力',
          '保険情報を入力（任意）',
          '「登録」をクリック',
        ],
        note: { type: 'warning', title: '注意', content: '重複登録を防ぐため、登録前に必ず既存データを検索してください。' },
      },
      {
        title: '受診者情報を編集する',
        items: [
          '受診者詳細画面で「編集」をクリック',
          '変更箇所を修正',
          '「保存」をクリック',
        ],
      },
      {
        title: '受診履歴を確認する',
        items: [
          '受診者詳細画面の「履歴」タブを選択',
          '過去の受診日・健診コースを確認',
          '各回の結果サマリーを表示',
        ],
      },
    ],
  },

  // BACK OFFICE
  report: {
    title: '帳票出力',
    url: 'manual_report',
    videos: [
      { id: 1, title: '事前帳票（問診票等）の印刷', duration: '2:00' },
      { id: 2, title: '報告書発行と印刷', duration: '3:15' },
    ],
    steps: [
      {
        title: '帳票の種類を選択',
        items: [
          '帳票出力メニューを開く',
          '出力したい帳票タイプを選択',
          '対象期間・対象者を指定',
        ],
      },
      {
        title: '出力設定',
        items: [
          '出力形式（PDF/Excel）を選択',
          'レイアウトテンプレートを選択',
          '必要に応じてカスタマイズ',
        ],
        note: { type: 'tips', title: 'Tips', content: 'よく使う設定はテンプレートとして保存できます。' },
      },
      {
        title: '出力実行',
        items: [
          'プレビューで内容を確認',
          '「出力」ボタンをクリック',
          'ダウンロードまたは印刷',
        ],
        note: { type: 'warning', title: '注意', content: '大量出力時はサーバー負荷軽減のため、時間をずらして実行してください。' },
      },
    ],
  },

  // HEALTH EXAMINATION
  result: {
    title: '結果入力',
    url: 'manual_result',
    videos: [
      { id: 1, title: '検査結果の入力', duration: '3:30' },
      { id: 2, title: '自動判定と医師承認', duration: '4:00' },
      { id: 3, title: '検査結果の数値入力', duration: '2:45' },
      { id: 4, title: '自動判定機能の活用', duration: '2:30' },
    ],
    faqVideos: [
      { id: 1, title: 'Q: 医師が「確定」ボタンを押す理由は？', duration: '2:00' },
    ],
    steps: [
      {
        title: '結果入力画面を開く',
        items: [
          '対象の受診者を検索・選択',
          '結果入力画面を開く',
          '入力モード（通常/一括）を選択',
        ],
      },
      {
        title: '検査結果を入力',
        items: [
          '各検査項目の数値を入力',
          '基準値との比較を確認',
          '異常値は自動でハイライト表示',
        ],
        note: { type: 'tips', title: 'Tips', content: 'Tabキーで次の項目に移動、数値入力����にEnterで確定できます。' },
      },
      {
        title: '判定を入力',
        items: [
          '総合判定を選択',
          '各項目の個別判定を入力',
          '所見コメントを記入',
        ],
        note: { type: 'warning', title: '注意', content: '判定確定後の修正は管理者権限が必要です。' },
      },
      {
        title: 'データを確定',
        items: [
          '入力内容を再確認',
          '「確定」ボタンをクリック',
          '確定通���を��認',
        ],
      },
    ],
  },
  questionnaire: {
    title: '問診入力',
    url: 'manual_questionnaire',
    videos: [
      { id: 1, title: '問診回答の入力', duration: '2:00' },
      { id: 2, title: '特定健診22項目の問診入力', duration: '2:30' },
    ],
    steps: [
      {
        title: '問診入力��面を開く',
        items: [
          '対象の受診者を選択',
          '問診入力タブを開く',
          '該当する問診フォームを選択',
        ],
      },
      {
        title: '問診内容を入力',
        items: [
          '各質問項目に回答を入力',
          '選択式・自由記述式に対応',
          '必須項目は全て入力',
        ],
        note: { type: 'tips', title: 'Tips', content: 'Web問診で事前入力された内容は自動で反映されます。' },
      },
      {
        title: '入力内容を確認・保存',
        items: [
          '入力内容をプレビューで確認',
          '「保存」をクリック',
          '必要に応じて印刷',
        ],
      },
    ],
  },

  // OPTIONS
  import: {
    title: 'データインポート',
    url: 'manual_import',
    videos: [],
    steps: [
      {
        title: 'CSVファイルの準備',
        items: [
          'ファイル形式: CSV（カンマ区切り値）',
          '1行目はヘッダーとして自動認識',
          '文字コード: UTF-8 推奨',
          '最大サイズ: 100MB',
        ],
        note: { type: 'warning', title: '注意', content: 'Shift-JIS/EUC-JP形式は文字化けの原因になります。UTF-8で保存してください。' },
      },
      {
        title: 'データフォーマットの確認',
        items: [
          '各列のデータ型を確認',
          '日付形式: YYYY-MM-DD',
          '数値: 整数または小数点表記',
          'テキスト: 255文字以内',
        ],
        note: { type: 'tips', title: 'Tips', content: '列名に日本語を使う場合、スペースや記号を避けるとエラー防止になります。' },
      },
      {
        title: 'インポートの実行',
        items: [
          '「インポート」ボタンをクリック',
          'ファイルを選択',
          'プレビューで内容確認',
          '「確認」で処理開始',
        ],
        note: { type: 'warning', title: '注意', content: '処理中はブラウザを閉じないでください。データ破損の原因になります。' },
      },
      {
        title: 'データの検証',
        items: [
          'インポート件数の確認',
          'エラーログの確認',
          'サンプルデータで表示検証',
        ],
        note: { type: 'tips', title: 'Tips', content: '検証画面は最大50件表示。全件確認はエクスポート機能をご利用ください。' },
      },
      {
        title: 'トラブルシューティング',
        items: [
          'エラー発生時はログを確認',
          'データ形式を再確認',
          'サポートへお問い合わせ',
        ],
        note: { type: 'tips', title: 'Tips', content: '大量データは複数ファイルに分割すると処理時間短縮。1ファイル10,000件以内推奨。' },
      },
    ],
  },
  export: {
    title: 'データエクスポート',
    url: 'manual_export',
    videos: [
      { id: 1, title: '特定健診結果CSVのエクスポート', duration: '2:00' },
      { id: 2, title: '提出用ファイルの作成手順', duration: '2:30' },
    ],
    faqVideos: [
      { id: 1, title: 'Q: 出力したデータはどこに保存される？', duration: '1:45' },
    ],
    steps: [
      {
        title: 'エクスポート対象を選択',
        items: [
          'エクスポートメニューを開く',
          'データ種別を選択',
          '対象期間・条件を指定',
        ],
      },
      {
        title: '出力形式を設定',
        items: [
          'ファイル形式（CSV/Excel/PDF）を選択',
          '出力項目をカスタマイズ',
          '文字コードを指定（UTF-8推奨）',
        ],
        note: { type: 'tips', title: 'Tips', content: 'よく使う設定はテンプレートとして保存できます。' },
      },
      {
        title: 'エクスポート実行',
        items: [
          '「エクスポート」をクリック',
          '処理完了を待つ',
          'ファイルをダウンロード',
        ],
        note: { type: 'warning', title: '注意', content: '大量データのエクスポートは時間がかかる場合があります。' },
      },
    ],
  },

  // ADMINISTRATION
  'health-info': {
    title: '健診情報管理',
    url: 'manual_health_info',
    videos: [
      { id: 1, title: '団体情報の登録', duration: '0:34', youtubeUrl: 'https://youtu.be/mRSeETqv5Eo' },
      { id: 2, title: '新規コースの枠組み作成', duration: '4:00' },
      { id: 3, title: '検査基準管理とコース検索', duration: '3:15' },
      { id: 4, title: 'コース内容の複製（参照複製）', duration: '2:45' },
      { id: 5, title: 'コース名称と出力名の設定', duration: '3:00' },
      { id: 6, title: '検査項目のグループ構成設定', duration: '2:30' },
      { id: 7, title: '標準検査とオプションの振分け', duration: '3:00' },
      { id: 8, title: '新コースの確定と有効���', duration: '2:30' },
      { id: 9, title: '団体情報の新規登録', duration: '3:15' },
      { id: 10, title: '特定健診の代行���関選択', duration: '2:45' },
      { id: 11, title: '保険団体と所属団体の自動連携', duration: '2:00' },
      { id: 12, title: '契約情報の基本設定', duration: '3:00' },
      { id: 13, title: '契約コースの紐付け', duration: '2:45' },
      { id: 14, title: '基本単価の入力', duration: '3:00' },
      { id: 15, title: '検査グループごとの詳細料金設定', duration: '2:30' },
      { id: 16, title: '特健種別の詳細設定', duration: '3:15' },
    ],
    faqVideos: [
      {
        id: 1,
        title: 'Q：「個人向け」と「団体向け」どちらを選べばいい？',
        duration: '0:11',
        youtubeUrl: 'https://youtu.be/9CzJb9sYUj4',
        steps: [
          '窓口支払いの個人予約なら「個人向け」',
          '会社や組合が費用負担する契約なら「団体向け」を選択',
          'この選択で「コースリスト」や「請求先」が自動で切り替わる点を解説',
        ],
        keywords: ['個人団体', '区分選択', '請求切替', '自費健診', '会社健診', 'コース出ない', '判別方法'],
      },
      {
        id: 2,
        title: 'Q：「標準検査」と「オプション」の違いはどこで決まる？',
        duration: '0:14',
        youtubeUrl: 'https://youtu.be/mrQwSdE6yp4',
        steps: [
          'コースの構成内容編集画面を確認',
          '「受診対象」と「必須」の両方にチェックがある項目＝標準（基本）検査',
          'チェックが片方または無い項目＝オプション検査として判別される仕組みを解説',
        ],
        keywords: ['判別基準', '必須項目', 'オプション設定', '標準項目', '違い', '見分け方', '設定ルール'],
      },
    ],
    steps: [],
  },
  master: {
    title: 'マスター管理',
    url: 'manual_master',
    videos: [
      { id: 1, title: 'アカウント権限の設定', duration: '2:30' },
    ],
    steps: [
      {
        title: '施設マスターを管理',
        items: [
          '施設情報を登録・編���',
          '所在地・連絡先を設定',
          '帳票に表示する情報を設定',
        ],
      },
      {
        title: '担当医マスタ�����管理',
        items: [
          '担当医情���を登録',
          '診療科・専門分野を設定',
          '���子署名の設定',
        ],
      },
      {
        title: 'コードマスターを管理',
        items: [
          '各種コードの追加・編集',
          '表示名と内部コードの対応',
          '使用停止設定',
        ],
        note: { type: 'tips', title: 'Tips', content: 'コードの削除より「使用停止」を推奨します。' },
      },
    ],
  },
  system: {
    title: 'システム設定',
    url: 'manual_system',
    videos: [
      { id: 1, title: 'ログインアカウント作成', duration: '0:22', youtubeUrl: 'https://youtu.be/L8ZTMUUL-BY' },
    ],
    faqVideos: [
      { id: 1, title: 'Q: 医師と一般スタッフでアカウントを分けるには？', duration: '2:30' },
    ],
    steps: [
      {
        title: 'ユーザーを管理',
        items: [
          'ユーザー一覧を開く',
          '新規ユーザーの追加',
          'パスワードリセット',
          'アカウントの有効化/無効化',
        ],
        note: { type: 'warning', title: '注意', content: 'ユーザー削除は元に戻せません。無効化を推奨します。' },
      },
      {
        title: '権限を設定',
        items: [
          '役割（ロール）を定義',
          '各機能へのアクセス権限を設定',
          'ユーザーに役割を割り当て',
        ],
      },
      {
        title: 'バック���ップを設定',
        items: [
          '自動バックアップのスケジ���ール設定',
          '保存先の指定',
          '手動バックアップの実行',
        ],
        note: { type: 'tips', title: 'Tips', content: '重要な変更前には手動バックアップを推奨します。' },
      },
    ],
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
