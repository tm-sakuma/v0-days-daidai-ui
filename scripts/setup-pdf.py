import shutil
import os
from pathlib import Path

# Get the project paths
project_root = Path('/vercel/share/v0-project')
public_dir = project_root / 'public'
source_file = Path('/user_read_only_context/text_attachments/Daidai_操作マニュアル_v100-y65Ts.pdf')
dest_file = public_dir / 'manua.pdf'

try:
    # Create public directory if it doesn't exist
    public_dir.mkdir(exist_ok=True)
    print(f'Public directory ready: {public_dir}')
    
    # Copy PDF file
    if source_file.exists():
        shutil.copy2(source_file, dest_file)
        print(f'Successfully copied PDF to {dest_file}')
    else:
        print(f'Source file not found: {source_file}')
        exit(1)
except Exception as error:
    print(f'Error setting up PDF: {error}')
    exit(1)
