export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Social Icons */}
          <div className="flex gap-4">
            {/* Discord */}
            <a
              href="https://discord.com/oauth2/authorize?client_id=1437098473915678822&permissions=277028662336&integration_type=1&scope=bot+applications.commands"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-200 hover:scale-110"
              title="Add Discord Bot"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/Transent_bot"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 hover:scale-110"
              title="Open Telegram Bot"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472c-.18 1.898-.962 6.502-1.36 8.627c-.168.9-.499 1.201-.82 1.23c-.696.065-1.225-.46-1.9-.902c-1.056-.693-1.653-1.124-2.678-1.8c-1.185-.78-.417-1.21.258-1.91c.177-.184 3.247-2.977 3.307-3.23c.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345c-.48.33-.913.49-1.302.48c-.428-.008-1.252-.241-1.865-.44c-.752-.245-1.349-.374-1.297-.789c.027-.216.325-.437.893-.663c3.498-1.524 5.83-2.529 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/cassxbt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-900 text-white transition-all duration-200 hover:scale-110"
              title="Follow on X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.727l-5.1-6.47-5.833 6.47H2.423l7.723-8.835L1.029 2.25h6.885l4.595 6.077 5.612-6.077zM17.15 18.558h1.828L6.122 3.975H4.231l12.919 14.583z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-400">
            <p>Powered by ROMA Framework | © 2024 Transent</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
