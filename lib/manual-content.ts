// Manual content data for each menu item

export interface VideoItem {
  id: number
  title: string
  duration: string
  youtubeUrl?: string
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
  steps: StepItem[]
}

export const manualContents: Record<string, ManualContent> = {
  // FRONT OFFICE
  appointment: {
    title: '予約／受付',
    url: 'manual_appointment',
    videos: [
      { id: 1, title: 'カレンダー予約と日程変更', duration: '3:00' },
      { id: 2, title: '当日受付とオプション検査追加', duration: '2:45' },
      { id: 3, title: '予約画面での表示確認', duration: '2:30' },
      { id: 4, title: '特定健診の予約と受診券情報の入力', duration: '3:15' },
    ],
    steps: [
      {
        title: '予約画面を開く',
        items: [
          'メインメニューから「予約／受付」を選択',
          'カレンダービューまたはリストビューを選択',
          '日付を指定して予約状況を確認',
        ],
        note: { type: 'tips', title: 'Tips', content: 'キーボードショートカット「Alt+R」で予約画面に直接アクセスできます。' },
      },
      {
        title: '新規予約の登録',
        items: [
          '「新規予約」ボタンをクリック',
          '受診者情報を入力または検索',
          '健診コースを選択',
          '希望日時を指定',
          '「予約確定」をクリック',
        ],
        note: { type: 'warning', title: '注意', content: '同一日時に重複予約がある場合はアラートが表示されます。' },
      },
      {
        title: '受付処理',
        items: [
          '予約一覧から該当者を選択',
          '来院確認ボタンをクリック',
          '受付票を印刷（必要に応じて）',
          '検査室への案内',
        ],
      },
      {
        title: '予約の変更・キャンセル',
        items: [
          '予約詳細画面を開く',
          '「編集」または「キャンセル」を選択',
          '変更内容を入力',
          '変更理由を記録',
        ],
        note: { type: 'tips', title: 'Tips', content: 'キャンセル履歴は受診者情報画面から確認できます。' },
      },
    ],
  },
  patient: {
    title: '受診者管理',
    url: 'manual_patient',
    videos: [
      { id: 1, title: '受診者の検索と新規登録', duration: '2:30' },
      { id: 2, title: '受診者情報の登録手順（特定健診用）', duration: '3:00' },
      { id: 3, title: '受診者の所属・保険団体設定', duration: '2:45' },
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
        note: { type: 'tips', title: 'Tips', content: 'Tabキーで次の項目に移動、数値入力後にEnterで確定できます。' },
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
          '確定通知を確認',
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
        title: '問診入力画面を開く',
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
    videos: [
      { id: 1, title: 'CSVファイルの準備', duration: '2:30', youtubeUrl: 'https://youtu.be/p6bAE6YuQNU' },
      { id: 2, title: 'データフォーマットの確認', duration: '3:15' },
      { id: 3, title: 'インポートプロセスの実行', duration: '2:45' },
      { id: 4, title: 'データの検証', duration: '3:00' },
      { id: 5, title: 'トラブルシューティング', duration: '4:20' },
    ],
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
      { id: 1, title: '団体情報の登録', duration: '3:30' },
      { id: 2, title: '新規コースの枠組み作成', duration: '4:00' },
      { id: 3, title: '検査基準管理とコース検索', duration: '3:15' },
      { id: 4, title: 'コース内容の複製（参照複製）', duration: '2:45' },
      { id: 5, title: 'コース名称と出力名の設定', duration: '3:00' },
      { id: 6, title: '検査項目のグループ構成設定', duration: '2:30' },
      { id: 7, title: '標準検査とオプションの振分け', duration: '3:00' },
      { id: 8, title: '新コースの確定と有効化', duration: '2:30' },
      { id: 9, title: '団体情報の新規登録', duration: '3:15' },
      { id: 10, title: '特定健診の代行機関選択', duration: '2:45' },
      { id: 11, title: '保険団体と所属団体の自動連携', duration: '2:00' },
      { id: 12, title: '契約情報の基本設定', duration: '3:00' },
      { id: 13, title: '契約コースの紐付け', duration: '2:45' },
      { id: 14, title: '基本単価の入力', duration: '3:00' },
      { id: 15, title: '検査グループごとの詳細料金設定', duration: '2:30' },
      { id: 16, title: '特健種別の詳細設定', duration: '3:15' },
    ],
    steps: [
      {
        title: '健診コースを管理',
        items: [
          '健診コース一覧を開く',
          'コースの追加・編集・削除',
          '含まれる検査項目を設定',
        ],
      },
      {
        title: '検査項目を管理',
        items: [
          '検査項目マスターを開く',
          '項目の追加・編集',
          '表示順序の設定',
        ],
        note: { type: 'warning', title: '注意', content: '使用中の項目を削除すると過去データに影響が出る場合があります。' },
      },
      {
        title: '基準値を設定',
        items: [
          '各検査項目の基準値を入力',
          '年齢・性別による基準値の分岐',
          '異常値の判定ルールを設定',
        ],
        note: { type: 'tips', title: 'Tips', content: '基準値変更は次回以降の判定に適用されます。' },
      },
    ],
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
          '施設情報を登録・編集',
          '所在地・連絡先を設定',
          '帳票に表示する情報を設定',
        ],
      },
      {
        title: '担当医マスター���管理',
        items: [
          '担当医情報を登録',
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
      { id: 1, title: 'システム起動とログイン手順', duration: '2:00' },
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
