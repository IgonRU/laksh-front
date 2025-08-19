import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BUILD_INFO } from '../../_shared/build-info';

@Component({
  selector: 'laksh-build-info',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="build-info">
      <span class="version">v{{ buildInfo.version }}</span>
      <span class="separator">•</span>
      <span class="commit" title="Commit: {{ buildInfo.commitHash }}">
        {{ buildInfo.commitHash }}
      </span>
      <span class="separator">•</span>
      <span class="date" title="Build time: {{ buildInfo.buildDate }}">
        {{ buildInfo.buildDate }}
      </span>
    </div>
  `,
  styles: [`
    .build-info {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: #666;
      font-family: 'Courier New', monospace;
    }
    
    .separator {
      color: #999;
    }
    
    .version {
      color: #007bff;
      font-weight: 600;
    }
    
    .commit {
      color: #28a745;
      font-family: 'Courier New', monospace;
    }
    
    .date {
      color: #6c757d;
    }
    
    @media (max-width: 768px) {
      .build-info {
        flex-direction: column;
        gap: 0.25rem;
        text-align: center;
      }
      
      .separator {
        display: none;
      }
    }
  `]
})
export class BuildInfoComponent {
  buildInfo = BUILD_INFO;
}
